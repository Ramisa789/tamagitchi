from flask import Flask, request, jsonify
from flask_cors import CORS 
import requests
from datetime import datetime, timezone, timedelta
from config import load_config


app = Flask(__name__)
CORS(app)

@app.route("/api/data")
def get_data():
    return jsonify({"message": "3 commits!", "data": [1, 2, 3]})


def get_recent_commits(token=None, per_page=30):
    config = load_config()
    username = config["github"]["username"]
    repo = config["github"]["repo"]
    token = config["github"]["token"]


    url = f"https://api.github.com/repos/{username}/{repo}/commits"
    params = {"per_page": per_page}
    headers = {}
    if token:
        headers["Authorization"] = f"token {token}"
    try:
        response = requests.get(url, params=params, headers=headers)
        print(f"[DEBUG] Status code: {response.status_code}")
        response.raise_for_status()
        data = response.json()
        return data
    except Exception as e:
        print(f"[DEBUG] Failed to fetch commits: {e}")
        return []
    

def filter_commits_last_hour(commits):
    now = datetime.now(timezone.utc)
    one_hour_ago = now - timedelta(hours=1)
    recent_commits = []
    latest_commit_time = None

    for commit in commits:
        try:
            commit_time_str = commit["commit"]["author"]["date"]
            commit_time = datetime.strptime(commit_time_str, "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc)
            if commit_time >= one_hour_ago:
                recent_commits.append(commit)
                if latest_commit_time is None or commit_time > latest_commit_time:
                    latest_commit_time = commit_time
        except KeyError:
            continue

    return {
        "count": len(recent_commits),
        "latest_commit_unix_ms": int(latest_commit_time.timestamp() * 1000) if latest_commit_time else None,
    }


def get_commit_mood(commits):

    count = commits["count"]
    if count == 0:
        mood = "Sick"
    elif 0 < count < 3:
        mood = "Sleepy"
    elif count == 3:
        mood = "Default"
    else:
        mood = "Happy"

    commits["mood"] = mood
    return commits


@app.route("/api/commits")
def get_commits():
    all_commits = get_recent_commits()
    recent_commits = filter_commits_last_hour(all_commits)
    commit_dict = get_commit_mood(recent_commits)
    return jsonify(commit_dict)


if __name__ == "__main__":
    app.run(debug=True, port=5000)

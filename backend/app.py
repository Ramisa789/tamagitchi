from flask import Flask, request, jsonify
from flask_cors import CORS 
import requests
from datetime import datetime, timezone, timedelta

app = Flask(__name__)
CORS(app)

@app.route("/api/data")
def get_data():
    return jsonify({"message": "Hello from Flask!", "data": [1, 2, 3]})


def get_recent_commits(token=None, per_page=30):
    url = f"https://api.github.com/repos/Ramisa789/tamagitchi/commits"
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
    for commit in commits:
        try:
            commit_time_str = commit["commit"]["author"]["date"]
            commit_time = datetime.strptime(commit_time_str, "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc)
            if commit_time >= one_hour_ago:
                recent_commits.append(commit)
        except KeyError:
            continue
    return recent_commits


def get_commit_mood(commits):
    count = len(commits)
    if count == 0:
        mood = "angry"
    elif 0 < count < 3:
        mood = "sleepy"
    elif count == 3:
        mood = "normal"
    else:
        mood = "happy"
    return count, mood


@app.route("/api/commits")
def get_commits():
    all_commits = get_recent_commits()
    recent_commits = filter_commits_last_hour(all_commits)
    count, mood = get_commit_mood(recent_commits)
    return jsonify(
        {
            "message": f"Found {count} commit(s) in the last hour",
            "commit_count": count,
            "mood": mood,
            "data": recent_commits,  # optionally remove or truncate
        }
    )


if __name__ == "__main__":
    app.run(debug=True, port=5000)

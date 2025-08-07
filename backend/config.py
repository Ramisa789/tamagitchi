import toml

def load_config():
    config = toml.load("config.toml")
    return config

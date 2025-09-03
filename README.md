# ecmr25slam
Webpage for ECMR Workshop 2025:

https://comrob.github.io/ecmr25slam/


## How to run locally
```
cd docs
bundle install
bundle exec jekyll serve --port 4001
```

## Dependencies
- Ruby 3.0+
### Snap method (easiest)
```
sudo snap install ruby --classic
# go to How to run locally
```
### Source method (if snap method fails)
If ruby --version falls with glibc version error, install ruby from source:
```
# Remove ruby from snap and apt
sudo snap remove ruby
sudo apt remove --purge ruby

#  Install Dependencies for rbenv and Ruby
sudo apt update
sudo apt install -y git curl autoconf bison build-essential libssl-dev libyaml-dev libreadline-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev

# Install rbenv and ruby-build
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

# Add rbenv to PATH and initialize it
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc

# Install Ruby
rbenv install 3.2.2
rbenv global 3.2.2
ruby --version
```

### Apt method

Don't
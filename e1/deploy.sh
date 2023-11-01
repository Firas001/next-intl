#!/bin/bash

cd ~/lamah-tech
git pull origin home
docker compose up -d --build lamahtech-nextjs
docker image prune -f
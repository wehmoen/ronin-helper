#!/bin/bash
# Forwards commands to the ronin executeable in the node docker container
docker exec -it node ronin $*

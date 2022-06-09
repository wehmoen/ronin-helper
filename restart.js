#!/bin/bash
# Stops and restarts the node. Set $RONIN_MANAGER to point to the ronin_manager executeable
$RONIN_MANAGER stop && $RONIN_MANAGER start

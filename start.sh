#!/bin/bash
# Family Feud Game Show - Launch Script
cd "$(dirname "$0")"

PORT=8080
echo "========================================================"
echo "  🎉 Starting Family Feud Game Show for School Kids"
echo "  🌐 Opening http://localhost:$PORT in your default browser"
echo "========================================================"

# Start local server and open browser
python3 -m http.server $PORT &
SERVER_PID=$!

sleep 1

# Open in default macOS browser
open "http://localhost:$PORT" 2>/dev/null || open "index.html"

# Wait for Ctrl+C to terminate server cleanly
trap "echo 'Stopping server...'; kill $SERVER_PID 2>/dev/null; exit 0" SIGINT SIGTERM
wait $SERVER_PID

(async () => {
  const ipRes = await fetch('https://api.ipify.org?format=json');
  const ipData = await ipRes.json();

  const fingerprint = {
    ip: ipData.ip,
    userAgent: navigator.userAgent,
    language: navigator.language,
    screen: {
      width: screen.width,
      height: screen.height
    },
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timestamp: new Date().toISOString()
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        fingerprint.location = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        };
        sendLog(fingerprint);
      },
      (err) => {
        fingerprint.location = { error: "User denied or error" };
        sendLog(fingerprint);
      }
    );
  } else {
    sendLog(fingerprint);
  }

  function sendLog(data) {
    fetch('https://your-endpoint.com/api/log', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
  }
})();

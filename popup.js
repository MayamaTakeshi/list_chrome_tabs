
document.addEventListener('DOMContentLoaded', () => {
  const tabsList = document.getElementById('tabs');

  // Get all open tabs
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      const li = document.createElement('li');

      // Include the tab's title and URL
      const title = tab.title || 'No Title';
      const url = tab.url || 'No URL';
      li.textContent = `${title} - ${url}`;

      // Optionally make the URL clickable
      const link = document.createElement('a');
      link.href = url;
      link.textContent = ' [Open]';
      link.target = '_blank';
      li.appendChild(link);

      tabsList.appendChild(li);
    });
  });
});


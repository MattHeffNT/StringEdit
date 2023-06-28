import { useState } from 'react';

function YouTubeEmbedConverter() {
  const [link, setLink] = useState('');
  const [modifiedLink, setModifiedLink] = useState('');

  const desiredWidth = "210";
  const desiredHeight = "150";
  const pattern = /width="\d+" height="\d+"/g;

  const handleInputChange = (event: any) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Replace the width and height attributes with the desired values
    const modified = link.replace(pattern, `width="${desiredWidth}" height="${desiredHeight}"`);
    const wrappedModified = `<div>${modified}</div>`;

    setModifiedLink(wrappedModified);

    // Copy the modified link to the clipboard
    navigator.clipboard.writeText(wrappedModified)
      .then(() => {
        console.log("Modified link has been copied to the clipboard.");
      })
      .catch((error) => {
        console.error("Failed to copy the modified link to the clipboard:", error);
      });

    window.alert("modified link copied to clipboard")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Please paste the YouTube embed link:
          <br />
          <br />
          <input type="text" value={link} onChange={handleInputChange} />
          <br />
        </label>
        <br />
        <button type="submit">Convert and Copy to Clipboard</button>
        <br />
        <br />
      </form>
      <div>
        Modified Link:
        <pre>{modifiedLink}</pre>
      </div>
    </div>
  );
}

export default YouTubeEmbedConverter;


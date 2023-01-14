const helpImage = event => {
  const receivedFile = event.target.files[0];
  const packedFile = new FormData();
  packedFile.append("image", receivedFile);
  return packedFile;
};

export default helpImage;
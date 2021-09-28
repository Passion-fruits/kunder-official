interface returnValue {
  file: File;
  preview: string;
}

export const getFileData = (event): Promise<returnValue> =>
  new Promise((resolve) => {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      resolve({
        file: file,
        preview: reader.result.toString(),
      });
    };
    file && reader.readAsDataURL(file);
  });

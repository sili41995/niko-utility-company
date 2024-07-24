const getArrayBuffer = (data: string): ArrayBuffer => {
  const buf = new ArrayBuffer(data.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < data.length; i++) view[i] = data.charCodeAt(i) & 0xff;
  return buf;
};

export default getArrayBuffer;

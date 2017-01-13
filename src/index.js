export default function (prefix) {
  return (req) => {
    if (req.url[0] === '/') {
      req.url = prefix + req.url;
      return req;
    }

    const protocol = req.url.substring(0, req.url.indexOf('://') + 3);
    const path = req.url.substring(req.url.indexOf('://') + 3, req.url.length);
    const newPath = path.substring(0, path.indexOf('/')) +
      prefix +
      path.substring(path.indexOf('/'), path.length);

    req.url = protocol + newPath;
    return req;
  };
}

const ShowDate = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const separator = "/";

  return `${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}${separator}${year}`;
};

export default ShowDate;

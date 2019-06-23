export default function date(param) {
  let now = new Date();

  now.setDate(now.getDate() + param);

  let dd = now.getDate();
  let mm = now.getMonth() + 1;
  mm =  (mm < 10) ? '0' + mm : mm;
  let yyyy = now.getFullYear();

  let dateFormatted = yyyy + '-' + mm + '-' + dd;
  console.log(dateFormatted)
  
  return dateFormatted;
}
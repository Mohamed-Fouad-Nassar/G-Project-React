export default function reviewUploadedImg(input, output) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      output.setAttribute("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

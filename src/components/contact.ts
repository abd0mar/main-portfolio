export class InputValidation{
  private isValid = {
    name: false,
    email: false,
    message: false,
  }

  private fields = [
    {
      input: document.getElementById("name-input") as HTMLInputElement,
      message: document.getElementById("invalid-name") as HTMLSpanElement,
      regex: /^[a-zA-Z]+( [a-zA-Z]+)*$/,
      key: "name",
    },
    {
      input: document.getElementById("email-input") as HTMLInputElement,
      message: document.getElementById("invalid-email") as HTMLSpanElement,
      regex: /^\w+(\.[\w]+)*@\w+(\.[\w]+)*\.\w{2,}$/,
      key: "email",
    },
    {
      input: document.getElementById("message-input") as HTMLTextAreaElement,
      message: document.getElementById("invalid-message") as HTMLSpanElement,
      regex: /^\w+$/,
      key: "message",
    },
  ]

  subBtn: HTMLButtonElement;

  constructor(){
    this.subBtn = document.getElementById("submit-btn") as HTMLButtonElement;

    const allFound = this.fields.every(field => field.input && field.message);
    if(!allFound || !this.subBtn) throw new Error("One or more input fields or messages were not found in the DOM.");

    this.validationCheck()
  }

  private validationCheck(){
    this.fields.forEach(field => {
      this.validateOnBlur(field.input, field.regex, field.key, field.message);
    })

    this.subBtn.addEventListener("click", (e) => {
      this.fields.forEach(field => {this.performValidation(field.input, field.regex, field.key, field.message);})
      if(Object.values(this.isValid).includes(false)) e.preventDefault();
    })
  }

  private performValidation(input:HTMLInputElement | HTMLTextAreaElement, regex:RegExp, key: keyof typeof this.isValid, message:HTMLSpanElement): void {
    let validCheck = regex.test(input.value);
    if(!validCheck){
      this.isValid[key] = false;
      input.classList.replace("border-border", "border-red-500");
      message.classList.remove("opacity-0");
    }
    else{
      this.isValid[key] = true;
      input.classList.replace("border-red-500", "border-border");
      message.classList.add("opacity-0");
    }
  }

  private validateOnBlur(input:HTMLInputElement | HTMLTextAreaElement, regex:RegExp, key: keyof typeof this.isValid, message:HTMLSpanElement){
    input.addEventListener("blur", () => {
      this.performValidation(input, regex, key, message);
    })
  }
}
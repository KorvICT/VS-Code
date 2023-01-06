---
marp: true
theme: uncover
class: invert
paginate: true
math: mathjax
---

# Marp 

(Markdown Presentation Ecosystem)

---

## Features

- :memo: **Write slides with Markdown** (CommonMark)
- :factory: Built off of <a href="https://marpit.marp.app">Marpit Framework</a>
- :tv: <a href="https://github.com/marp-team/marp-cli/"> Marp CLI</a>: Convert Markdown to **HTML, PDF, PPTX & Images**
- :vs: <a href="https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode">Marp for VS Code</a>: Live preview your slides while editing
- $\emptyset$ Free and Open Source
- and more...

---

## Why?

* :rocket: It's fast...
* :thumbsup: ... and easy!

---

## Syntax

```Markdown
---
# Heading 1
---
## Heading 2

- List Item (un-ordered)
* List Item (fragmented, unordered)

1. List Item (ordered)
2) List Item (fragmented, unordered)
<!--comment-->
$ (math) $
---
```
---

## Math!

$s^3(-s^3-7s^2+2s-6)$

Try solving this $\uparrow$
or this $\downarrow$

$\frac{d}{dt}e^{2t}$

or this: $\angle A = x,\angle B = 42^\circ,a=22m,b=17m$ Solve for $x$.

Answers at the end...

---

## Code!

```powershell
[int]$input = Read-Host "Please Enter 0 or 1"

While ($input -eq 1){
    Write-Host "1"
}
If ($input -eq 0){
    Write-Host "0"
}
Else{
    Write-Host "Number Error: Input is not 0 or 1."
}
```

---

## Code, Part 2

```javascript
let password = prompt("Enter your password:");

if (password.length < 8) {
  console.log("Your password is weak. It should be at least 8 characters long.");
} else if (!/[0-9]/.test(password)) {
  console.log("Your password is weak. It should contain at least one number.");
} else if (!/[!@#$%^&*]/.test(password)) {
  console.log("Your password is weak. It should contain at least one special character.");
} else {
  console.log("Your password is strong.");
}
```
---

---

## Answers

* ### 1
  - $-s^6-7s^5+2s^4-6s^3$
* ### 2
  - $2*(e^{2t})$
* ### 3
  - $\angle A=60^\circ$

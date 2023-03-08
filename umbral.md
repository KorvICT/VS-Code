---
marp: true
theme: uncover
class: invert
paginate: true
math: mathjax
style: |
    .darken {
        color: grey;
    }
---

$\def\inf{\infty}$
$\def\ddx{\frac{d}{dx}}$
$\def\opI{\mathcal{I}}$
$\def\opD{\mathcal{D}}$
$\def\stirlingI{\genfrac{[}{]}{0pt}{}}$
$\def\srtx{\sqrt{2^x}}$

# <!--fit--> A Dive into the Umbral World 

<span class="darken">By:</span> Gen L.

$\def\fd{\Delta}$
$\def\defi{\mathbf{Definition:}}$
$\def\rel{\Leftrightarrow}$
$\def\umb{\phi}\def\umbi{\phi^{-1}}$
$\def\stirlingII{\genfrac\{\}{0pt}{}}$
$\def\srt{\sqrt{2}}$

---

## Prerequisites:

* Basic (non-discrete) Calculus
    * Derivatives:
        * $\ddx f(x)$
    * Integrals:
        * $\int f(x)\ dx$
    * Fundamental Theorem of Calculus
        * $\ddx \int f(x)\ dx=f(x)$
* Binomial Theorem
    * $$(a+b)^x=\sum_{n=0}^{\inf} {x\choose n}a^nb^{x-n}$$

---

## A Note on Notation:

* Rather than the Leibniz notation:
    * $\int f(x)\ dx,\ddx f(x)$
* Operator Notation will be used
    * Integrals:
        * $\opI f(x)$
    * Derivatives:
        * $\opD f(x)$
    * Inverse Theorem:
        * $\opD\opI f(x)=f(x)$
    
---

## Analogous Theories: Discrete Calculus

* Forward Differences
    * $\fd f(x)$
* Summation
    * $\sum f(x)$
* Discrete Inverse Theorem
    * $\fd\sum f(x)=f(x)$
* Relation with Classical Calculus
    * $\phi\opD=\fd\phi,\ \phi\opI=\sum\phi$

---

## Example: $f(x)=x^2$

* From classical calculus:
    * $\opD x^2=2x$
* In discrete calculus, we only care about the discrete rate of change. (For every unit, what is the rate of change?)
    * $x^2+\fd x^2=(x+1)^2$
        * $\fd x^2=(x+1)^2-x^2$
        * $\fd x^2=x^2-x^2+2x+1$
        * $\therefore\fd x^2=2x+1$
    
---

## The Forward Difference

* $\defi\text{ The \emph{foward difference}}\ \fd \text{ of} \ f(x) \text{ is given by:}$
    * $\fd f(x)=f(x+1)-f(x)$
* Importantly: $\fd$ is linear, which means:

$\fd f(x)+\fd g(x)=\fd[f(x)+g(x)]\land\fd af(x)=a\fd f(x)$ $\therefore \fd \text{ is additive, and commutes with scalar multiplication.}$

---

## Inversions

* Like in classical calculus:
    * $\opD\opI f(x)=f(x)$
* In discrete calculus:
    * $\fd\sum f(x)=f(x)$
* The forward difference is inverse to a sum.

---

## Summation

* **Example:**
    $9=1+3+5$
    $$9=\sum_{n=0}^{2}\fd n^2$$
    $$x^2=\sum_{n=0}^{x-1}\fd n^2$$

---

## Telescoping a Sum

* **Example:**
    * $$\sum_{n=a}^{x-1}\fd f(n)=\fd f(a)+\fd f(a+1)+\cdots+\fd f(x-2)+\fd f(x-1)$$
    * $$\sum_{n=a}^{x-1}\fd f(n)=f(x)-f(a)$$
        * *Look familiar?*
    * $$\int_a^x\opD f(n)\ dn=f(x)-f(a)$$
        * *The Fundamental Theorem of Calculus!*
    
---

## The Discrete Fundamental Theorem of Calculus

$$\sum_{n=a}^{x-1}\fd f(n)=f(x)-f(a)$$

or

$$\sum_{n=0}^{x+1}n^2=f(x) \rel\fd f(x)=x^2$$

---

## Forward Differences > Sums

$\fd x=1$
$\fd x^2=2x+1$
$\fd x^3=3x^2+3x+1$
$\vdots$

* Rearrange the equations

$x^2=\fd(\frac{1}{3}x^3-\frac{1}{2}x^2+\frac{1}{6}x)$
$$\rel \sum_{n=0}^{x-1}n^2=\frac{1}{3}x^3-\frac{1}{2}x^2+\frac{1}{6}x$$

---

## Indefinite Sum

$$\defi\text{ The \emph{indefinite sum} of a function }f\text{ is a function}\sum f(x) \text{with the property that:}$$
$\fd\sum f(x)=f(x)$

It is unique up to a constant term, like the indefinite integral: 
$\opD\opI f(x)=f(x)$

---

## Falling Powers

$$\defi\text{ for } n\in\mathbb{N}, \text{ the \emph{falling power }} x_n \text{ is given by}$$
$x_n=x(x-1)(x-2)\cdots(x-n+2)(x-n+1)$
$x_{n-1}=x(x-1)(x-2)\cdots(x-n+2)$
$(x+1)_n=(x+1)x(x-1)(x-2)\cdots(x-n+2)$

---

## Falling Power Rule

$x_n=x_{n-1}(x-n+1)$
$(x+1)_n=(x+1)x_{n-1}$

* $\fd x_n=(x+1)_n-x_n$
    * $\fd x_n=(x+1)x_{n-1}-x_{n-1}(x-n+1)$
    * $\fd x_n=(x+1-x+n-1)x_{n-1}$
    * $\fd x_n=nx_{n-1}$

$\therefore \fd x_n=nx_{n-1}$

---

## Conversion Operator: $\umb\text{ and }\umbi$

$$\defi \ \umb:x^n\rightarrow x_n$$

$$\begin{array}{ccc} x^n & \xrightarrow{\opD}\; & nx^{n-1}\\ \umb\downarrow & & \umb\downarrow \\ x_n & \xrightarrow{\fd}\;& nx_{n-1} \end{array}$$

$\umb\opD x^n=\fd\umb x^n$
$\umb\opD=\fd\umb$
$\fd=\umb\opD\umbi$
$\sum=\umb\opI\umbi$

---

## Example of Conversion Operator

$$\sum_{n=0}^{x-1}n^2=\umb\int_0^x\umbi n^2\ dn$$
$$\sum_{n=0}^{x-1}n^2=\umb\int_0^x n^2+n\ dn$$
$$\sum_{n=0}^{x-1}n^2=\umb(\frac{x^3}{3}+\frac{x^2}{2})$$
$$\sum_{n=0}^{x-1}n^2=\frac{x^3}{3}-\frac{x^2}{2}+\frac{x}{6}$$

---

## Calculating the Conversion Operator

* $\umb x=x_1, \umb x^2=x_2, \umb x^3=x_3, \umb x^4=x_4, \dots$
* $\umb x=x, \umb x^2=x^2-x, \umb x^3=x^3-3x^2+2x,\dots$
* $\umbi x=x, \umbi x^2=x^2+x, \umbi x^3=x^3+3x^2+x,\dots$

---

## Stirling Numbers

* Signed of the First Kind
    * Coefficients of $\umb$
    * Any pair of adjacent coefficients, multiply the first one by the negative row number, then add to find the coefficient underneath.
* Unsigned of the Second Kind
    * Coefficients of $\umbi$
    * Any pair of adjacent coefficients, multiply the first one by its term's exponent, then add to find the coefficient underneath.

---

## Stirling Numbers Relations

* Signed
    * $\stirlingI{n+1}{k}=-n\stirlingI{n}{k}+\stirlingI{n}{k-1}$
* Unsigned
    * $\stirlingII{n+1}{k}=k\stirlingII{n}{k}+\stirlingII{n}{k-1}$
* *These look similar...*
* Binomial Coefficients:
    * ${n+1\choose k}={n \choose k}+{n \choose k-1}$

---

## Using Binomials to Compute $\umb e^n$
 
${n \choose k}=\frac{n_k}{k!}$

$$e^{ax}=\sum_{n=0}^\inf\frac{a^nx^n}{n!}$$
$$\umb e^{ax}=\sum_{n=0}^\inf{x \choose n}a^n$$
$\therefore \umb e^{ax}=(a+1)^x$

---

## Using Binomials to Compute $\umb \sin,\cos,\ln$

$\sin x=\frac{-i}{2}(e^{ix}-e^{-ix})$
$\umb \sin x=\frac{-i}{2}(\umb e^{ix}-\umb e^{-ix})$
$\umb \sin x=\frac{-i}{2}[(1+i)^x-(1-i)^x]$
$\umb \sin x=\frac{-i}{2}[(\srt e^{i\pi/4})^x-(\srt e^{-i\pi/4})^x]$
$\umb \sin x=\srtx\frac{-i}{2}(e^{xi\pi/4}-e^{-xi\pi/4})$
$\umb \sin x=\srtx\sin\frac{x\pi}{4}$
$\umb \cos x=\srtx\cos\frac{x\pi}{4}$
$\umb \ln x=H_{x-1}$

---

## Relations

$\opD e^x=e^x \rel \fd 2^x=2^x$
$\opD \sin x= \cos x \rel \fd\umb\sin x=\umb\cos x$

## Unanswered Questions:

$\umb e^{-x}=0?$
$(\umb\sin x)^2+(\umb\cos x)^2=\umb e^x$

---

## The Forward Difference Formula

$$f(x)=\sum_{n=0}^\inf\frac{x^n}{n!}\opD^nf(0)$$
$$\umb f(x)=\sum_{n=0}^\inf{x \choose n}\umb\opD^nf(0)$$
$$f(x)=\sum_{n=0}^\inf{x \choose n}\fd^nf(0)$$



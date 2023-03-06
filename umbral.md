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
# <!--fit--> A Dive into the Umbral World 

<span class="darken">By:</span> Gen L.

$\def\fd{\Delta}$
$\def\defi{\mathbf{Definition:}}$
$\def\rel{\Leftrightarrow}$
$\def\umb{\phi}\def\umbi{\phi^{-1}}$

---

## Prerequisites:

* Basic (non-discrete) Calculus
    * Derivatives:
        * $\frac{d}{dx}f(x)$
    * Integrals:
        * $\int f(x)\ dx$
    * Fundamental Theorem of Calculus
        * $\frac{d}{dx}\int f(x)\ dx=f(x)$
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
    * $\fd x_n=nx_{n-1}$

$\therefore \fd x_n=nx_{n-1}$

---

## Conversion Operator: $\umb\text{ and }\umbi$

$$\defi \ \umb=x^n\xrightarrow{\umb}\;x_n$$

$$\begin{array}{ccc} x^n & \xrightarrow{\opD}\;& nx^{n-1}\\ \umb\downarrow & & \umb\downarrow \\ x_n & \xrightarrow{\fd}\;& nx_{n-1} \end{array}$$

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

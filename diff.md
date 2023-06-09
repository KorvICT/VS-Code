---
marp: true
theme: uncover
class: invert
math: mathjax
style: |
    .darken{
        color: darkgrey;
    }
backgroundColor: rgb(7,12,25)
---

# A Tourist's Guide to Differentials

<span class="darken">By</span> Gen G.

<!--_footer: Made for SIG Figures '23-->

---

# Differential Equations

* Often, these are used to describe change, rather than concrete amounts.
* Examples:
    * Population Sizes
    * Personal Attraction
    * Motion

[[1]](https://youtu.be/p_di4Zn4wz4)

---

# Forms

* Ordinary Differental Equations (ODEs)
    * 1-variable (time)
    * $\ddot{\theta}(t)=-\mu\dot{\theta}(t)-\frac{g}{L}\sin\theta(t)$
* Partial Differential Equations (PDEs) 
    * Multiple inputs (continuum of values)
    * $\frac{\partial{T}}{\partial{t}}(x,y,t)=\frac{\partial^2T}{\partial{x^2}}(x,y,t)+\frac{\partial^2T}{\partial{y^2}}(x,y,t)$

[[1]](https://youtu.be/p_di4Zn4wz4)

---

# Motion

* Force of gravity: $-9.8\frac{\text{m/s}}{\text{s}}=-g$
* Acceleration = change in velocity
* $\ddot{y}(t)=-g,\ \dot{y}(t)=-gt+v_0,\ y(t)=-\frac{1}{2}gt^2+v_0t+y_0$

[[1]](https://youtu.be/p_di4Zn4wz4)

---

# The Heat Equation

* 1d case: $\frac{\partial{T}}{\partial{t}}(x,t)=\alpha\cdot\frac{\partial^2T}{\partial{x}^2}(x,t)$
* 3d case: $\frac{\partial{T}}{\partial{t}}(x,y,z,t)=\alpha\cdot\nabla^2T$
* We've solved this: Fourier Series.

[[2]](https://youtu.be/ly4S0oi3Yz8)

---

# $e^t$

* What properties does it have?
* $\frac{d}{dt}e^t=e^t$
* $\frac{d}{dt}e^{ct}=c\cdot e^{ct}$
* $\frac{d}{dt}e^{it}=i\cdot e^{it}$

[[3]](https://youtu.be/v0YEaeIClKY)

---

# References

* All references are in square brackets

1. [Intro to Differential Equations](https://youtu.be/p_di4Zn4wz4)
2. [Partial Differential Equations](https://youtu.be/ly4S0oi3Yz8)
3. [$e^{i\pi}$ in 3.14 minutes](https://youtu.be/v0YEaeIClKY)

---

# Further Research

* [Differential Equations](https://youtube.com/playlist?list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6)

/*export const mainList = [
  {name: 'prędkość w ruchu po okręgu', formula: 'v=s/t', latex: "v= \\frac s t", category: "Kinematyka"},
  {name: 'prędkość w ruchu jedn.', formula: 'v=(s/t)*1.23', latex: `a^2 + b^2 = c^2`, category: "Kinematyka"},
  {name: 'prędkość Żyda', formula: 'v=h*v', latex: `V=h*v`, category: "happy math"},
];*/

export const mainList = [
  //Kinematyka
  {name: 'prędkość', formula: 'v=r/t', latex: "\\vec{v}=\\frac{\\Delta\\vec{r}}{\\Delta t}", category: "Kinematyka"},
  {name: 'przyspieszenie', formula: 'a=v/t', latex: "\\vec{a}=\\frac{\\Delta\\vec{v}}{\\Delta t}", category: "Kinematyka"},
  {name: 'prędkość kątowa (1)', formula: 'o=a/t', latex: "\\omega=\\frac{\\Delta \\alpha}{\\Delta t}", category: "Kinematyka"},
  {name: 'prędkość kątowa (2)', formula: 'o=(2*3,1416)/t', latex: "\\omega=\\frac{2\\pi}{T}", category: "Kinematyka"},
  {name: 'prędkość w ruchu po okręgu', formula: 'v=o*r', latex: "v=\\omega \\cdotp r", category: "Kinematyka"},
  {name: 'przyspieszenie dośrodkowe (1)', formula: 'a=(v**2)/r', latex: "a_d=\\frac{v^2}{r}", category: "Kinematyka"},
  {name: 'przyspieszenie dośrodkowe (2)', formula: 'a=(o**2)*r', latex: "a_d=\\omega^2 \\cdotp r", category: "Kinematyka"},
  {name: 'przyspieszenie kątowe', formula: 'e=o/t', latex: "\\varepsilon=\\frac{\\Delta\\omega}{\\Delta t}", category: "Kinematyka"},
  {name: 'przyspieszenie styczne', formula: 'a=e*r', latex: "a_{st}=\\varepsilon \\cdotp r", category: "Kinematyka"},
  {name: 'prędkość w prostoliniowym ruchu jednostajnie zmiennym', formula: 'v=v+(a*t)', latex: "v=v_0 + a \\cdotp t", category: "Kinematyka"},
  {name: 'droga w prostoliniowym ruchu jednostajnie zmiennym', formula: 's=(v*t)+((0.5*a)*(t**2))', latex: "s=v_0 \\cdotp t + \\frac{1}{2} a \\cdotp t^2", category: "Kinematyka"},
  //Drgania i fale
  {name: 'okres drgań masy na sprężynie i wahadła matematycznego (1)', formula: 't=(2*3,1416)*((m/k)**(0.5))', latex: "T=2\\pi\\sqrt\\frac{m}{k}", category: "Drgania i fale"},
  {name: 'okres drgań masy na sprężynie i wahadła matematycznego (2)', formula: 't=(2*3,1416)*((l/g)**(0.5))', latex: "T=2\\pi\\sqrt\\frac{l}{g}", category: "Drgania i fale"},
  {name: 'częstotliwość i długość fali (1)', formula: 'f=1/t', latex: "f=\\frac{1}{T}", category: "Drgania i fale"},
  {name: 'częstotliwość i długość fali (2)', formula: 'l=v*t', latex: "\\lambda=v \\cdotp t", category: "Drgania i fale"},
  // {name: 'załamanie fali', formula: 'z=', latex: "\\lambda=v \\cdotp t", category: "Drgania i fale"},
  // {name: 'siatka dyfrakcyjna', formula: 'z=', latex: "\\lambda=v \\cdotp t", category: "Drgania i fale"},
  {name: 'efekt Dopplera (plus)', formula: 'f=f*(v/(v+u))', latex: "f=f_{źr}\\frac{v}{v+u_{źr}}", category: "Drgania i fale"},
  {name: 'efekt Dopplera (minus)', formula: 'f=f*(v/(v-u))', latex: "f=f_{źr}\\frac{v}{v-u_{źr}}", category: "Drgania i fale"},
  //Dynamika (iloczyn skalarny i wektorowy)
  {name: 'pęd', formula: 'p=m*v', latex: "\\vec{p}=m \\cdotp \\vec{v}", category: "Dynamika"},
  {name: 'II zasada dynamiki (1)', formula: 'f=p/t', latex: "\\vec{F}=\\frac{\\Delta\\vec{p}}{\\Delta t}", category: "Dynamika"},
  {name: 'II zasada dynamiki (2)', formula: 'a=f/m', latex: "\\vec{a}=\\frac{\\vec{F}}{m}", category: "Dynamika"},
  {name: 'moment pędu bryły sztywnej', formula: 'j=i*o', latex: "J=I \\cdotp \\omega", category: "Dynamika"},
  {name: 'II zasada dynamiki ruchu obrotowego (1)', formula: 'm=j/t', latex: "M=\\frac{\\Delta J}{\\Delta t}", category: "Dynamika"},
  {name: 'II zasada dynamiki ruchu obrotowego (2)', formula: 'e=m/i', latex: "\\varepsilon=\\frac{M}{I}", category: "Dynamika"},
  {name: 'moc', formula: 'p=w/t', latex: "P=\\frac{W}{\\Delta t}", category: "Dynamika"},
  {name: 'energia kinetyczna', formula: 'e=0.5*m*(v**2)', latex: "E_{kin}=\\frac{1}{2}m \\cdotp v^2", category: "Dynamika"},
  {name: 'energia kinetyczna ruchu obrotowego bryły sztywnej', formula: 'e=0.5*i*(o**2)', latex: "E_{kin}=\\frac{1}{2}I \\cdotp \\omega1^2", category: "Dynamika"},
  //Siła ciężkości, siła sprężystości i siła tarcia
  {name: 'prawo powszechnego ciążenia', formula: 'f=g*((m*n)/(r**2))', latex: "F_g=G\\frac{m_1 \\cdotp n}{r^2}", category: "Siły: ciężkości, sprężystości i tarcia"},
  {name: 'natężenie pola grawitacyjnego', formula: 'g=f/m', latex: "\\vec{\\gamma}=\\frac{\\vec{F_g}}{m}", category: "Siły: ciężkości, sprężystości i tarcia"},
  {name: 'energia potencjalna grawitacji', formula: 'e=(-(g))*(m*n)/r', latex: "E_p=-G\\frac{m \\cdotp n}{r}", category: "Siły: ciężkości, sprężystości i tarcia"},
  {name: 'zmiana energii potencjalnej grawitacji na małych wysokościach', formula: 'e=m*g*h', latex: "\\Delta E_p = m \\cdotp g \\cdotp \\Delta h", category: "Siły: ciężkości, sprężystości i tarcia"},
  {name: 'III prawo Keplera', formula: 'c=(t**2)/(r**3)', latex: "const=\\frac{T^2}{R^3}", category: "Siły: ciężkości, sprężystości i tarcia"},
  {name: 'siła sprężystości', formula: 'f=(-(k))*x', latex: "\\vec{F_s}=-k \\cdotp \\vec{x}", category: "Siły: ciężkości, sprężystości i tarcia"},
  {name: 'energia potencjalna sprężystośc', formula: 'e=0.5*k*(x**2)', latex: "E_{pot}=\\frac{1}{2}k \\cdotp x^2", category: "Siły: ciężkości, sprężystości i tarcia"},
  {name: 'siła tarcia kinetycznego', formula: 't=m*f', latex: "T_k=\\mu_k \\cdotp F_N", category: "Siły: ciężkości, sprężystości i tarcia"},
  {name: 'siła tarcia statycznego', formula: 't=m*F', latex: "T_s \\leqslant \\mu_s \\cdotp F_N", category: "Siły: ciężkości, sprężystości i tarcia"},
];
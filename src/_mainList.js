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
  {name: 'siła tarcia statycznego', formula: 't=m*f', latex: "T_s \\leqslant \\mu_s \\cdotp F_N", category: "Siły: ciężkości, sprężystości i tarcia"},
  //Optyka
  {name: 'kąt graniczny', formula: 'a=1/n', latex: "\\sin \\alpha_{gr}=\\frac 1 n", category: "Optyka"},
  {name: 'zwierciadło kuliste', formula: 'f=r/2', latex: "f=\\frac R 2", category: "Optyka"},
  //Fizyka współczesna
  {name: 'równoważność masy-energii', formula: 'e=m*(c**2)', latex: "E=m \\cdot c^2", category: "Fizyka współczesna"},
  {name: 'energia fotonu (1)', formula: 'e=h*f', latex: "E=h \\cdot f", category: "Fizyka współczesna"},
  {name: 'energia fotonu (2)', formula: 'e=(h*c)/l', latex: "E=\\frac{h \\cdot c}{\\lambda}", category: "Fizyka współczesna"},
  {name: "długość fali de Broglie’a", formula: 'l=h/(m*v)', latex: "\\lambda=\\frac{h}{m \\cdotp v}", category: "Fizyka współczesna"},
  {name: "poziomy energetyczne atomu wodoru", formula: 'e=-((13,6*e*v)/(n**2))', latex: "E_n=-\\frac{13,6eV}{n^2}", category: "Fizyka współczesna"},
  {name: "prawo Hubble’a", formula: 'v=h*r', latex: "v=H \\cdotp r", category: "Fizyka współczesna"},
  //Termodynamika
  {name: "gęstość", formula: 'r=m/v', latex: "\\rho=\\frac m V", category: "Termodynamika"},
  {name: "ciśnienie", formula: 'p=f/s', latex: "p=\\frac F S", category: "Termodynamika"},
  {name: "zmiana ciśnienia hydrostatycznego", formula: 'p=r*g*h', latex: "\\Delta p = \\rho \\cdot g \\cdot \\Delta h", category: "Termodynamika"},
  {name: "I zasada termodynamiki", formula: 'u=q+w', latex: "\\Delta U = Q + W", category: "Termodynamika"},
  {name: "praca siły parcia", formula: 'w=(-p)*v', latex: "W=-p \\cdotp \\Delta V", category: "Termodynamika"},
  {name: "ciepło właściwe", formula: 'c=q/(m*t)', latex: "c_w = \\frac{Q}{m \\cdotp \\Delta T}", category: "Termodynamika"},
  {name: "ciepło molowe", formula: 'c=q/(n*t)', latex: "C = \\frac{Q}{n \\cdotp \\Delta T}", category: "Termodynamika"},
  {name: "ciepło przemiany fazowej", formula: 'q=m*l', latex: "Q=m \\cdotp L", category: "Termodynamika"},
  {name: "średnia energia kinetyczna ruchu postępowego cząsteczek", formula: 'e=(1.5*k)*t', latex: "E_{śr}=\\frac{3}{2}k_B \\cdotp T", category: "Termodynamika"},
  {name: "ciepła molowe gazu doskonałego", formula: 'c=c+r', latex: "C_p=C_V + R", category: "Termodynamika"},
  {name: "sprawność silnika cieplnego (1)", formula: 'e=w/q', latex: "\\eta = \\frac W Q", category: "Termodynamika"},
  {name: "sprawność silnika cieplnego (2)", formula: 'e=(q-o)/q', latex: "\\eta = \\frac{Q_1 - Q_2}{Q_1} = \\frac{Q - O}{Q}", category: "Termodynamika"},
  //Pole magnetyczne
  {name: "pole przewodnika prostoliniowego", formula: 'b=(m*n*i)/(2*3.1416*r)', latex: "B=\\frac{\\mu_0 \\mu_r \\cdotp I}{2 \\pi \\cdotp r}=\\frac{\\mu_0 n \\cdotp I}{2 \\pi \\cdotp r}", category: "Pole magnetyczne"},
  {name: "pole pętli (w jej środku)", formula: 'b=(m*n*i)/(2*r)', latex: "B=\\frac{\\mu_0 \\mu_r \\cdotp I}{2 \\cdotp r}=\\frac{\\mu_0 n \\cdotp I}{2 \\cdotp r}", category: "Pole magnetyczne"},
  {name: "pole długiego solenoidu (zwojnicy)", formula: 'b=m*n*((n*i)/l)', latex: "B=\\mu_0 \\mu_r \\frac{n \\cdotp I}{l}", category: "Pole magnetyczne"},
  {name: "SEM indukcji", formula: 'e=-(p/t)', latex: "\\varepsilon-\\frac{\\Delta \\Phi}{\\Delta t}", category: "Pole magnetyczne"},
  {name: "SEM samoindukcji", formula: 'e=-l*(i/t)', latex: "\\varepsilon-L\\frac{\\Delta I}{\\Delta t}", category: "Pole magnetyczne"},
  {name: "SEM samoindukcji", formula: 'e=-l*(i/t)', latex: "\\varepsilon-L\\frac{\\Delta I}{\\Delta t}", category: "Pole magnetyczne"},
  {name: "wartości skuteczne prądu przemiennego (1)", formula: 'u=u/(2**0.5)', latex: "U_{sk}=\\frac{U_{max}}{\\sqrt{2}}", category: "Pole magnetyczne"},
  {name: "wartości skuteczne prądu przemiennego (2)", formula: 'i=i/(2**0.5)', latex: "I_{sk}=\\frac{I_{max}}{\\sqrt{2}}", category: "Pole magnetyczne"},
  //Elektrostatyka
  {name: "prawo Coulomba (1)", formula: 'f=k*((q*o)/(r**2))', latex: "F=k\\frac{q_1 \\cdotp q_2}{r^2}=k\\frac{q \\cdotp o}{r^2}", category: "Elektrostatyka"},
  {name: "prawo Coulomba (2)", formula: 'k=1/(4*3.1416*e)', latex: "k=\\frac{1}{4\\pi \\cdotp \\varepsilon_0}", category: "Elektrostatyka"},
  {name: "natężenie pola", formula: 'e=f/q', latex: "\\vec{E}=\\frac{\\vec{F}}{q}", category: "Elektrostatyka"},
  {name: "napięcie", formula: 'u=w/q', latex: "U=\\frac{W}{q}", category: "Elektrostatyka"},
  {name: "pole jednorodne", formula: 'u=e*d', latex: "U=E \\cdotp d", category: "Elektrostatyka"},
  {name: "pojemność kondensatora płaskiego (1)", formula: 'c=q/u', latex: "C=\\frac{Q}{U}", category: "Elektrostatyka"},
  {name: "pojemność kondensatora płaskiego (2)", formula: 'c=q/u', latex: "C=\\varepsilon_r \\varepsilon_0 \\cdotp \\frac S d=r \\varepsilon \\cdotp \\frac S d", category: "Elektrostatyka"},
  {name: "energia kondensatora (1)", formula: 'w=(0.5*q)*u', latex: "W=\\frac{1}{2}Q \\cdotp U", category: "Elektrostatyka"},
  {name: "energia kondensatora (2)", formula: 'w=(0.5*c)*(u**2)', latex: "W=\\frac{1}{2}C \\cdotp U^2", category: "Elektrostatyka"},
  //Prąd elektryczny
  {name: "natężenie prądu", formula: 'i=q/t', latex: "I=\\frac{\\Delta Q}{\\Delta t}", category: "Prąd elektryczny"},
  {name: "moc prądu", formula: 'p=u*i', latex: "P=U \\cdotp I", category: "Prąd elektryczny"},
  {name: "opór przewodnika", formula: 'r=r*(l/s)', latex: "R=\\rho \\cdotp \\frac{l}{S}", category: "Prąd elektryczny"},
  {name: "prawo Ohma", formula: 'i=u/r', latex: "I=\\frac U R", category: "Prąd elektryczny"},
  {name: "napięcie ogniwa", formula: 'u=e-(i*r)', latex: "U=\\varepsilon - I \\cdotp R_W", category: "Prąd elektryczny"},

];
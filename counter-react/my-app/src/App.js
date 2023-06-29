import React from 'react';
import './App.css';
import Counter from './Counter';
import Benutzer from './Benutzer';

function App() {
  
  return (
    <div className="App">
      <div>
      <h1 className="headliner ">useState</h1>
        <ul>
            <li>
                useState ist ein Hook in React, der es ermöglicht, den Zustand in funktionalen Komponenten zu verwalten.
            </li>
            <li>
                Der useState-Hook wird verwendet, um eine Variable und eine Funktion zum Aktualisieren dieses Zustands zu deklarieren.
            </li>
            <li>
                useState akzeptiert einen anfänglichen Wert als Parameter und gibt ein Array mit zwei Elementen zurück: die aktuelle Zustandsvariable und die Funktion zum Aktualisieren des Zustands.
            </li>
            <li>
                Du kannst den aktuellen Zustandswert lesen, indem du auf die entsprechende Variable zugreifst, z.B. count für einen Zähler.
            </li>
            <li>
                Du kannst den Zustand aktualisieren, indem du die zugehörige Update-Funktion verwendest, z.B. setCount(newValue) für den Zähler.
            </li>
            <li>
                Wenn du den Zustand aktualisierst, wird die Komponente neu gerendert und die Änderungen werden auf der Seite angezeigt.
            </li>
            <li>
                Du kannst useState in einer Komponente mehrmals verwenden, um mehrere Zustandsvariablen zu verwalten.
            </li>
            <li>
                Du kannst auch komplexe Datenstrukturen wie Objekte oder Arrays als Zustand verwenden.
            </li>
            <li>
                useState ermöglicht es, lokalisierten Zustand innerhalb einer Komponente zu haben, ohne eine Klasse zu verwenden.
            </li>
            
        </ul>
    </div>
      <div>
        <Counter />
      </div>
      <div>
        <h1 className='headliner'>Props</h1>
        <ul>
            <li>
                Props (Properties) sind eine Möglichkeit, Daten von einer übergeordneten Komponente an eine untergeordnete Komponente in React zu übergeben.
            </li>
            <li>
                Props sind wie Informationen oder Daten, die einer Komponente mitgegeben werden, damit sie weiß, was sie anzeigen oder tun soll.
            </li>
            <li>
                Props werden als Attribute in JSX verwendet, wenn eine Komponente gerendert wird.
            </li>
            <li>
                Props können verschiedene Datentypen enthalten, wie Zeichenketten, Zahlen, Booleans, Objekte oder Funktionen.
            </li>
            <li>
                In der untergeordneten Komponente können Props verwendet werden, um auf die übergebenen Daten zuzugreifen und sie anzuzeigen oder zu verarbeiten.
            </li>
            <li>
                Props ermöglichen die Wiederverwendbarkeit von Komponenten, da sie es ermöglichen, dass eine Komponente mit verschiedenen Daten verwendet wird.
            </li>
            <li>
                Props sind unveränderlich (immutable), d.h. sie können in der untergeordneten Komponente nicht direkt geändert werden. Sie dienen dazu, Daten von außen bereitzustellen.
            </li>
            <li>
                Props können auch verwendet werden, um Funktionen oder Callbacks an eine untergeordnete Komponente zu übergeben, um auf Ereignisse zu reagieren oder Aktionen auszuführen
            </li>
            
        </ul>
    </div>
      <div>
        <Benutzer name="Hansi" age={29} city="Bobbau" />
        <Benutzer name="Benni" age={32} city="Leipzig" />
        <Benutzer name="Oleg" age={32} city="Berlin" />
        <Benutzer name="Rick" age={36} city="Dortmund" />
        
      </div>
      
    </div>
  
  );
}

export default App;
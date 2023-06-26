//Async-Funktionen: Eine Funktion wird als "async" markiert, indem das Schlüsselwort "async" vor dem Funktionsnamen platziert wird. Async-Funktionen sind spezielle Funktionen, die asynchrone Operationen ausführen und Promises zurückgeben. Der Hauptvorteil einer Async-Funktion besteht darin, dass sie die Verwendung von Promises und Callbacks erleichtert.


async function fetchData() {
    // Hier wird asynchrone Logik ausgeführt
    return result; // Das Promise-Objekt wird zurückgegeben
  }
  
  //Await-Ausdruck: Innerhalb einer Async-Funktion kann das Schlüsselwort "await" vor einem Ausdruck verwendet werden, der ein Promise-Objekt zurückgibt. Await pausiert die Ausführung der Funktion, bis das Promise gelöst wird. Dies ermöglicht es, asynchrone Operationen auf synchrone Weise zu behandeln.
  
  
  async function fetchData() {
    const result = await fetch('https://api.example.com/data'); // Das await pausiert die Funktion, bis das Promise gelöst wird
    console.log(result); // Der Wert des gelösten Promises wird ausgegeben
  }
  
  //In diesem Beispiel wird die Funktion fetchData mit dem Schlüsselwort async deklariert. Innerhalb der Funktion verwenden wir await, um die Ausführung anzuhalten, bis das Promise, das von der fetch-Funktion zurückgegeben wird, gelöst wird. Sobald das Promise gelöst ist, wird der resultierende Wert der Variable result zugewiesen und dann ausgegeben.
  
  //Fehlerbehandlung: Um Fehler in einer async-Funktion zu behandeln, kannst du try/catch-Blöcke verwenden, um Fehler abzufangen, die innerhalb des await-Ausdrucks auftreten.
  
  
  
  async function fetchData() {
    try {
      const result = await fetch('https://api.example.com/data');
      console.log(result);
    } catch (error) {
      console.log('Fehler beim Abrufen der Daten:', error);
    }
  }
  
  //Hier wird der try-Block verwendet, um die Ausführung des await-Ausdrucks zu überwachen. Wenn während der Ausführung ein Fehler auftritt, wird die Kontrolle zum catch-Block übergeben, wo du den Fehler behandeln kannst.
  
  //Async/Await vereinfacht die asynchrone Programmierung, indem es den Code lesbarer macht und es ermöglicht, asynchrone Operationen auf eine ähnliche Weise wie synchrone Operationen zu behandeln. Es eliminiert auch die Notwendigkeit, Callback-Funktionen zu verwenden und ermöglicht eine effektivere Fehlerbehandlung.
  
  
  
  
  //Um APIs in JavaScript mit Async/Await zu verwenden, benötigst du normalerweise eine Funktion, die den API-Aufruf enthält und das Promise-Objekt zurückgibt. Hier ist ein Beispiel, das den Import einer API mit Async/Await in JavaScript zeigt:
  
  
  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data'); // API-Aufruf mit fetch()
      const data = await response.json(); // Extrahiere die JSON-Daten aus der API-Antwort
      console.log(data); // Gib die empfangenen Daten aus
    } catch (error) {
      console.log('Fehler beim Abrufen der Daten:', error);
    }
  }
  
  fetchData();
  
  //In diesem Beispiel wird die Funktion fetchData deklariert, die mit dem Schlüsselwort async markiert ist. Innerhalb der Funktion verwenden wir await, um den API-Aufruf mit fetch() auszuführen. fetch() gibt ein Promise-Objekt zurück, das die API-Antwort repräsentiert. Wir verwenden await, um auf die Auflösung des Promises zu warten und die Antwort in der Variable response zu speichern.
  
  //Anschließend verwenden wir await, um die Methode json() auf der response aufzurufen, die ebenfalls ein Promise-Objekt zurückgibt. Dieses Promise wird aufgelöst, um die JSON-Daten aus der API-Antwort in der Variable data zu speichern.
  
  //Bitte beachte, dass dies ein vereinfachtes Beispiel ist und dass die spezifische Implementierung je nach API und den erforderlichen Daten variieren kann. Du musst möglicherweise auch zusätzliche Parameter an die API-URL anhängen oder andere Methoden verwenden, um Daten zu senden und zu empfangen, je nach den Anforderungen der API, die du verwendest.
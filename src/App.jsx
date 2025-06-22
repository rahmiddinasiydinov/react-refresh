import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcepts';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data'

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  console.log('APP');

  function handeSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  let tabContent = <p>Please select a topic</p>
  if (selectedTopic) {
    tabContent = <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map(conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem}/>)
            }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handeSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handeSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handeSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handeSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;

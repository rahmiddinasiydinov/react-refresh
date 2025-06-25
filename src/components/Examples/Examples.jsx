import { useState } from "react";

import TabButton from "../TabButton";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";
import { EXAMPLES } from "../../data";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

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

    return <Section title="Examples" id="examples">
        <Tabs
            buttons={<>
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handeSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handeSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handeSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handeSelect('state')}>State</TabButton>
            </>}>
            {tabContent}
        </Tabs>
    </Section>
}
import type { NextPage } from 'next'
import { useState } from 'react'
import { InferGetStaticPropsType  } from 'next'
import styles from '../../styles/Home.module.css'
import GrammarRules  from '../../services/api/GrammarRules'
 
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const Random: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ grammar }) => {
  const [itemIndex, setItemIndex] = useState(getRandomInt(grammar.length));
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const randItemIndex = () => {
    setShowMoreInfo(false);
    setItemIndex(getRandomInt(grammar.length));
  };

  const moreInfo = () => setShowMoreInfo(true);

  return (
    <div className={styles.container}>
      <button onClick={randItemIndex}>Randomize</button>
      <div>
        {grammar[itemIndex].name}
        <button onClick={moreInfo}>More info</button>
      </div>
      {showMoreInfo && <div>test</div>}
    </div>
  )
}

export async function getStaticProps() {
  const grammarRules = new GrammarRules();
  const grammar = await grammarRules.get(8);

  return {
    props: {
      grammar
    },
  }
}

export default Random

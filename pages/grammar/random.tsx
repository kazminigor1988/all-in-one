import type { NextPage } from 'next'
import { useState } from 'react'
import { InferGetStaticPropsType  } from 'next'
import styles from '../../styles/Random.module.css'
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
      <p className={styles.ruleName}>{grammar[itemIndex].name}</p>
      <div>
        <button onClick={randItemIndex}>Randomize</button>
        <button onClick={moreInfo}>More info</button>
      </div>
      {
        showMoreInfo && 
        <div>
          {grammar[itemIndex].description && <p>{grammar[itemIndex].description}</p>}
          {grammar[itemIndex].rules && <><p>Rules:</p><p>{grammar[itemIndex].rules.map(rule => { 
            return (<><span>{rule}</span><br /></>);
          })}</p></>}
          {grammar[itemIndex].examples && <><p>Examples:</p><p>{grammar[itemIndex].examples.map(example => { 
            return (<><span>{example}</span><br /></>);
          })}</p></>}
          <p>Lesson: {grammar[itemIndex].lesson}</p>
        </div>
      }
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

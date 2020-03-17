import React, {lazy, Suspense } from 'react';

import ChartsGrid from '../../components/layout/ChartsGrid';

const config = [
    {
      name: 'First',
      path: './First',
      props: {title: 'FIRST', name: 'Yannis', surname: 'Marios'}
    },
    {
      name: 'Second',
      path: './Second',
      props: {title: 'SECOND', name: 'John', surname: 'Doe'}
    },
    {
      name: 'Third',
      path: './Third',
      props: {title: 'THIRD', name: 'John', surname: 'Doe'}
    }
  ]
  
  const importedComponents = () => {
    const components = {}
    for(let i = 0; i < config.length; i++) {
      components[config[i].name] = lazy(() => import(`${config[i].path}`))
    }
    return components
  }


function HighchartsHOC(props) {
    const Components = importedComponents();

    const components = config.map(c => {
        const Component = Components[c.name];
        return <Suspense key={c.name} fallback={<div>Loading...</div>}><Component title={c.title} key={c.name} {...c.props} /></Suspense>
    });

    return <ChartsGrid data={components} />
}

export default HighchartsHOC;
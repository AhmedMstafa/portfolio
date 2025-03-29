'use client';
import { useEffect, useReducer } from 'react';
import data from '@/data.json';
import MainHeader from '../main-header';
import Project from './project';

const actions = { HTMLANDCSS: 'HTMLANDCSS', JS: 'JS', REACT: 'REACT' };

function filterProjects(projectplace) {
  return data.filter((project) => project.place === projectplace);
}

function reducerFn(state, action) {
  if (action.type === actions.HTMLANDCSS) {
    return {
      activeBtn: actions.HTMLANDCSS,
      data: [...filterProjects('html&css')],
    };
  }
  if (action.type === actions.JS) {
    return { activeBtn: actions.JS, data: [...filterProjects('javascript')] };
  }
  if (action.type === actions.REACT) {
    return { activeBtn: actions.REACT, data: [...filterProjects('react')] };
  }

  return { ...state };
}

export default function Projects() {
  const [state, dispatch] = useReducer(reducerFn, {
    activeBtn: '',
    data: [],
  });

  useEffect(() => {
    dispatch({ type: actions.REACT });
  }, []);

  function showProjectsBy(category) {
    dispatch({ type: category });
  }

  const classbtn = 'nav-btn btn btn-dark position-relative';

  const classbtnActive = classbtn + ' active';

  return (
    <section id="works" className="works pt-5 min-vh-100">
      <div className="container text-light">
        <MainHeader title="works" />
        <div className="nav-pill mt-5 mb-5 d-flex ">
          <button
            id="react-btn"
            type="button"
            className={`${
              state.activeBtn === actions.REACT ? classbtnActive : classbtn
            }`}
            onClick={() => showProjectsBy(actions.REACT)}
          >
            React
          </button>

          <button
            id="js-btn"
            type="button"
            className={`${
              state.activeBtn === actions.JS ? classbtnActive : classbtn
            }`}
            onClick={() => showProjectsBy(actions.JS)}
          >
            JavaScript
          </button>

          <button
            id="html-btn"
            type="button"
            className={`${
              state.activeBtn === actions.HTMLANDCSS ? classbtnActive : classbtn
            }`}
            onClick={() => showProjectsBy(actions.HTMLANDCSS)}
          >
            HTML & CSS
          </button>
        </div>
        <div className="wrapper row">
          {state.data.map((p) => (
            <Project key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

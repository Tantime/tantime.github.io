import React, { useEffect } from 'react';
import '../../App.css'
import './Cse15Labs.css'
import { Link } from 'react-router-dom';

export default function Cse15Lab5() {
  return(
    <>
    <div className='body'>
      <div className='return'>
        <div className='lab-links'>
          <Link to='/code/cse15labs'>CSE15L Lab Reports</Link>
        </div>
      </div>
      <h1>Lab Report 5 - Analyzing Different Outputs</h1>
      <p className='p-cse'><em>Author: Matthew Tan</em></p>
      <h2>How did I find the tests with different results?</h2>
      <p>
        <div className='lab-links-newtab'>
        <a rel='noreferrer' target='_blank' href='https://github.com/ucsd-cse15l-w22/markdown-parse/tree/main/test-files'>
          Link to the commonmark-spec test files
        </a>
        </div>
        I found both of the tests with different results simply by manually 
        checking outputs. Given that there were large differences in implementation, 
        it did not take me very long to find different results between my lab group’s 
        version of MarkdownParse and the one we looked at in week 9.
      </p>
      <h2>Analyzing Output - Test File 19</h2>
      <p>test-19:</p>
      <div className='original-width'>
        <img src='/images/lab5-pngs/test-19.png' alt='test 19'/>
      </div>
      <p>test-19 commonmark-output:</p>
      <div className='original-width'>
        <img src='/images/lab5-pngs/test-19-output-expected.png' alt='test 19 expected output'/>
      </div>
      <h3>1. Which implementation was correct?</h3>
      <p>Output from my implementation:</p>
      <div className='original-width'>
        <img src='/images/lab5-pngs/test-19-output-my.png' alt='test 19 my output'/>
      </div>
      <p>Output from given implementation:</p>
      <img src='/images/lab5-pngs/test-19-output-given.png' alt='test 19 given output'/>
      <p>
        Comparing the outputs to the expected output, my implementation was incorrect 
        while the given week 9 implementation was correct.
      </p>
      <h3>2. The bug behind the symptom(s):</h3>
      <p>
        The expected output was '[]'', but my 'getLinks()'' threw the 'NoSuchElementException' 
        shown above. The code responsible for the excpetion was the following conditional:
      </p>
      <div className='original-width'>
        <img src='/images/lab5-pngs/test-19-bug-my.png' alt='test 19 my bug'/>
      </div>
      <p>
        The problem with this behavior is that once my code recognizes that there are brackets 
        in the .md file, it assumes the user intends for there to be a link and will throw an 
        exception if there are no corresponding parenthesis. However, brackets are used for 
        many things other than links, so I need to change this conditional to be more specific 
        in order to be able to replicate the expected output.
        <br/>
        The week 9 implementation of MarkdownParse produced the correct output.
      </p>
      <h2>Analyzing Output - Test File 652</h2>
      <p>test-652:</p>
      <div className='original-width'>
        <img src='/images/lab5-pngs/test-652.png' alt='test 652'/>
      </div>
      <p>test-652 commonmark output:</p>
      <div className='original-width'>
        <img src='/images/lab5-pngs/test-652-output-expected.png' alt='test 652 expected output'/>
      </div>
      <h3>1. Which implementation was correct?</h3>
      <p>Output from my implementation:</p>
      <div className='original-width'>
        <img src='/images/lab5-pngs/test-652-output-my.png' alt='test 652 my output'/>
      </div>
      <p>Output from give implementation:</p>
      <div className='original-width'>
        <img src='/images/lab5-pngs/test-652-output-given.png' alt='test 652 give output'/>
      </div>
      <p>
        As in the case of test 19, my implementation produced incorrect output while the week 9 
        implementation replicated the expected result.
      </p>
      <h3>2. The bug behind the symptom(s):</h3>
      <p>
        The expected output was '[]'', but my 'getLinks()' threw the 'NoSuchElementException' 
        shown above. The code responsible for the excpetion was the following conditional:
      </p>
      <img src='/images/lab5-pngs/test-19-bug-my.png' alt='test 19 my bug'/>
      <p>
        In this case, my code throws an error because it expects there to be a link, but there 
        weren’t any specifying brackets or parenthesis. If I change my code to start searching 
        for links once it has seen an open bracket '&#40;', followed by some text 'some text', 
        followed by a closed bracket plus an open parenthesis '&#93;&#40;', then it won’t throw a 
        NoSuchElementException when the user did not intend for there to be a link.
        <br/><br/>
        Once again, the week 9 implementation of MarkdownParse produced the correct output.
      </p>
      <div className='return'>
        <div className='lab-links'>
          <Link to='/code/cse15labs'>CSE15L Lab Reports</Link>
        </div>
      </div>
    </div>
  </>
  )
}
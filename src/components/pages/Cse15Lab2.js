import React, { useEffect } from 'react';
import '../../App.css'
import './Cse15Labs.css'
import { Link } from 'react-router-dom';

export default function Cse15Lab2() {
  return(
    <>
      <div className='body'>
        <div className='return'>
          <div className='lab-links'>
            <Link to='/code/cse15labs'>CSE15L Lab Reports</Link>
          </div>
        </div>
        <h1>Lab Report 2 - Incremental Programming and Debugging</h1>
        <p className='p-cse'><em>Author: Matthew Tan</em></p>
        <h2>Code Change #1</h2>
        <p>
          Added two conditional statements to catch bad input (in the case of this test file 
          input, it is the extra set of parentheses surrounding the link), send an error message, 
          and print out an example of the expected link format.
        </p>
        <br/>
        <img src='/images/lab2-pngs/lab2-change1.png' alt='change 1'/>
        <br/>
        <div className='lab-links-newtab'>
          <a rel='noreferrer' target='_blank' href='https://github.com/Tantime/markdown-parse/commit/10452ee1127f00b75af2cd3884f7e2aa2caad09f'>link to test-file3.md</a>
        </div>
        <br/>
        <p>Symptom:</p>
        <img src='/images/lab2-pngs/lab2-symptom.png' alt='symptom 1'/>
        <br/>
        <p>
          The underlying bug was the conditional 'currentIndex &lt; markdown.length()' always being 
          true causing a never-ending while loop in MarkdownParse’s main method. The 
          corresponding symptom was an infinite loop caused by the failure-inducing input of an
          md-formatted link enclosed in an extra set of parentheses in test-file3.md.
        </p>
        <h2>Code Change #2</h2>
        <p>
          Added two more conditional statements to catch bad input (in the case of this test file 
          input, it is the extra set of brackets surrounding the link), send an error message, and 
          print out an example of the expected link format.
        </p>
        <br/>
        <img src='/images/lab2-pngs/lab2-change2.png' alt='change 2'/>
        <div className='lab-links-newtab'>
          <a href='https://raw.githubusercontent.com/Tantime/markdown-parse/5ef0d5f8974af0d029001422cf50cfbedc429f73/test-file4.md'>
            link to test-file4.md (shown as raw because GitHub displays md-style formatting)
          </a>
        </div>
        <br/>
        <p>Symptom:</p>
        <img src='/images/lab2-pngs/lab2-symptom.png' alt='symptom 2'/>
        <br/>
        <p>
         The underlying bug was still the never-ending while loop in MarkdownParse’s main method 
         due to the conditional 'currentIndex &lt; markdown.length()' always evauluating to true. 
         The symptom was an infinite loop caused by the failure-inducing input of an md-formatted 
         link enclosed in an extra set of brackets in test-file4.md.
        </p>
        <h2>Code Change #3</h2>
        <p>Added conditionals and error messages to handle bad user input.</p>
        <br/>
        <img src='/images/lab2-pngs/lab2-change3.png' alt='change 3'/>
        <br/>
        <div className='lab-links-newtab'>
          <a href='https://github.com/Tantime/markdown-parse/blob/main/test-file5.md'>
            link to test-file5.md
          </a>
        </div>
        <br/>
        <p>Symptom:</p>
        <img src='/images/lab2-pngs/lab2-symptom3.png' alt='symptom 3'/>
        <br/>
        <p>
          The symptom in the case of test-file5.md was a StringIndexOutOfBoundsException being 
          thrown when attempting to parse the given input. The bug causing the error was the 
          function call 'markdown.substring(openParen + 1, closeParen)' being given invalid, 
          out-of-bounds arguments that result from bad user input.
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
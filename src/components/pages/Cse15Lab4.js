import React, { useEffect } from 'react';
import '../../App.css'
import'./Cse15Labs.css'
import { Link } from 'react-router-dom';

export default function Cse15Lab4() {
  return(
        <>
      <div className='body'>
        <div className='return'>
          <div className='lab-links'>
            <Link  to='/code/cse15labs'>CSE15L Lab Reports</Link>
          </div>
        </div>
        <h1>Lab Report 4 - Additional Testers for markdown-parse</h1>
        <p className='p-cse'><em>Author: Matthew Tan</em></p>
        <p>
          Instructions: <br/>
          For each snippet, add a test both to your implementation of markdown-parse, and 
          the implementation you reviewed in week 7. Run the tests and show the results of 
          running the tests on each. This means you should add a total of 6 test methods 
          (3 to your implementation and 3 to the one you reviewed).
        </p>
        <h2>The Snippets and Their Testers</h2>
        <div className='lab-links-newtab'>
          
        </div>
        <p>
          <div className='lab-links-newtab'>
            <a rel='noreferrer' target='_blank' href='https://github.com/Tantime/markdown-parse'>
              Link to my markdown-parse repo
            </a> In order to be able to observe how both my and the peer reviewed implementation of 
            markdown-parse process the three snippets below, I created tester methods for each 
            snippet. I used the <a rel='noreferrer' target='_blank' href='https://spec.commonmark.org/dingus/'>
              CommonMark demo site
            </a> to see expected Markdown behavior.
          </div>
        </p>
        <h3>Snippet 1</h3>
        <div className='original-width'>
          <img src='/images/lab4-pngs/snippet1.png' alt='snippet 1' />
        </div>
        <br/>
        <p>Tester method for snippet 1:</p>
        <br/>
        <div className='original-width'>
          <img src='/images/lab4-pngs/snippet1-my-test.png' alt='snippet 1 my test'/>
        </div>
        <h3>Snippet 2</h3>
        <div className='original-width'>
          <img src='/images/lab4-pngs/snippet2.png' alt='snippet 2'/>
        </div>
        <br/>
        <p>Tester method for snippet 2:</p>
        <br/>
        <div className='original-width'>
          <img src='/images/lab4-pngs/snippet2-my-test.png' alt='snippet 2 my test'/>
        </div>
        <h3>Snippet 3</h3>
        <div className='original-width'>
          <img src='/images/lab4-pngs/snippet3.png' alt='snippet 3'/>
        </div>
        <br/>
        <p>Tester method for snippet 3:</p>
        <br/>
        <div className='original-width'>
          <img src='/images/lab4-pngs/snippet3-my-test.png' alt='snippet 3 my test'/>
        </div>
        <h2>Running Tests on my markdown-parse</h2>
        <p>
          First, I added the snippets as Markdown files and tried running all three 
          tests on my implementation of the MarkdownParse class.
        </p>
        <h3>Snippet 1 output:</h3>
        <img src='/images/lab4-pngs/snippet1-my-test-fail.png' alt='snippet 1 my test fail'/>
        <h3>Possible code change:</h3>
        <p>
          The CommonMark demo site identified part of the first “link” as part of a code 
          block, so the second half of the “link” was not a valid link. My code identified 
          the first “link” as a valid link because I have nothing to identify code blocks. 
          If I add a couple if statements to help identify the content between two backticks 
          as a code block, my output would match that of the CommonMark demo site.
        </p>
        <h3>Snippet 2 output:</h3>
        <img src='/images/lab4-pngs/snippet2-my-test-fail.png' alt='snippet 2 my test fail'/>
        <h3>Possible code change:</h3>
        <p>
          One thing I noticed about the behavior shown on the CommonMark demo site was that 
          links that has line breaks in them were not considered valid links. My code on the 
          other hand does not do anything to handle line breaks, and this could lead to 
          misleading errors. A small change I could make would be to run a check 
          (with an if statement) for line breaks and treat them as a indication to reset the 
          search for a new link.
        </p>
        <h2>Running Tests on Reviewed markdown-parse</h2>
        <p>
          <div className='lab-links-newtab'>
            <a href='https://github.com/IncogOwl/markdown-parse/tree/197bb0413dbbb5c218a6605033fcfc30c74f5af1'>
              Link to reviewed markdown-parse repo
            </a>
          </div>
          <br/>
          Just as I did for my implementation of MarkdownParse, I added the three snippets and 
          corresponding tests on the version of MarkdownParse that we reviewed during lab in week 7.
        </p>
        <h3>Snippet 1 Output:</h3>
        <img src='/images/lab4-pngs/snippet1-test-fail.png' alt='snippet1 test fail'/>
        <h3>Snippet 2 Output:</h3>
        <img src='/images/lab4-pngs/snippet2-test-fail.png' alt=''/>
        <h3>Snippet 3 Output:</h3>
        <img src='/images/lab4-pngs/snippet3-test-fail.png' alt=''/>
        <div className='return'>
          <div className='lab-links'>
            <Link to='/code/cse15labs'>CSE15L Lab Reports</Link>
          </div>
        </div>
      </div>
    </>
  )
}
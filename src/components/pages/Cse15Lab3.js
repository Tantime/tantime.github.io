import React, { useEffect } from 'react';
import '../../App.css'
import './Cse15Labs.css'
import { Link } from 'react-router-dom';

export default function Cse15Lab3() {
  return(
    <>
      <div className='body'>
        <div className='return'>
          <div className='lab-links'>
            <Link to='/code/cse15labs'>CSE15L Lab Reports</Link>
          </div>
        </div>
        <h1>Lab Report 3 - Setup GitHub Access from ieng6</h1>
        <p className='p-cse'><em>Author: Matthew Tan</em></p>
        <h2>Using a Preexisting Public Key</h2>
        <p>
          First things first, check to see if you have a preexisting public SSH key. You can do 
          this by entering ls -al ~/.ssh into the terminal.
          <blockquote>$ ls -al ~/.ssh</blockquote>
          This will list the files in your .ssh directory, if they exist. Check to see if a 
          public SSH key currently exists. They will be under the names by default:
          <ul>
            <li>id_rsa.pub</li>
            <li>id_ecdsa.pub</li>
            <li>id_ed25519.pub</li>
          </ul>
          Identify which public key you want to use and save for the next steps.
        </p>
        <h2>Using a New SSH Key</h2>
        <p>
          If you’re like me and you don’t already have a preexisting public key or you want to 
          use a new one, you can create a new pair of public/private keys by opening the terminal 
          and typing (with your GitHub email address in place of the example email):
          <blockquote>$ ssh-keygen -t ed25519 -C “your_email@example.com”</blockquote>
          This generates a new public/private SSH key pair. Next, you will be prompted with:
          <blockquote>&gt; Enter a file in which to save the key(/Users/you/.ssh/algorithm): [Press enter]</blockquote>
          You can either press enter to save the key to the default file location 
          or customize the path to your liking. Then when prompted, assign a passphrase 
          (leave blank for no passphrase) and press enter.
          <blockquote>&gt; Enter a passphrase (empty for no passphrase): [Type a passphrase]</blockquote>
          You will be asked to enter it once more for confirmation.
          <blockquote>&gt; Enter same passphrase again: [Type passphrase again]</blockquote>
          This is what it looked like in my terminal:
        </p>
        <br/>
        <img src='/images/lab3-pngs/lab3-creating-public-key.png' alt='creating public key'/>
        <h2>Adding Your SSH Key to the SSH-Agent</h2>
        <p>
          Now that you have your public key ready, you can now add it to the ssh-agent. 
          First, activate the ssh-agent in the background.
          <blockquote>
            $ eval “$(ssh-agent -s)” <br/> Agent pid 59566 (replaced with your pid)
          </blockquote>
          Depending on the terminal, you may need to use a different command. Common examples 
          are needing to use sudo -s -H before starting the ssh-agent or using exec ssh-agent 
          bash or exec ssh-agent zsh to run the ssh-agent.
          <br/><br/>
          First, check to see if your ~/.ssh/config file exists in the default location.
          <blockquote>
            $ open ~/.ssh/config <br/> &gt; The file /Users/you/.ssh/config does not exist.
          </blockquote>
          If the file doesn’t exist, create the file.
          <blockquote>$ touch ~/.ssh/config</blockquote>
          Open your ~/.ssh/config file, then modify the file to contain the following lines. 
          If your SSH key file has a different name or path than the example code, modify the 
          filename or path to match your current setup.
          <blockquote>
            Host * <br/>
              <span/>AddKeysToAgent yes <br/>
              <span/>UseKeychain yes <br/>
              <span/>IdentityFile ~/.ssh/id_ed25519 <br/>
          </blockquote>
          If you’re using macOS Sierra 10.12.2 or later, you will need to modify your 
          ~/.ssh/config file to automatically load keys into the ssh-agent and store passphrases 
          in your keychain. I had to do this, so refer to my screenshot below:
        </p>
        <br/>
        <img src='/images/lab3-pngs/lab3-activate-agent-edit-ssh-config.png' alt='activate agent'/>
        <img src='/images/lab3-pngs/lab3-edit-ssh-config.png' alt='edit-ssh-config'/>
        <p>
          Add your SSH private key to the ssh-agent and store your passphrase in the keychain. If 
          you created your key with a different name, or if you are adding an existing key that has 
          a different name, replace id_ed25519 in the command with the name of your private key file.
          <blockquote>$ ssh-add -K ~/.ssh/id_ed25519</blockquote>
          While this method does still work, I received a warning telling me that the -K flag is 
          deprecated and has been replaced by the –apple-use-keychain command, so using that updated 
          command will also work. Refer to the screenshot below:
        </p>
        <br/>
        <img src='/images/lab3-pngs/lab3-adding-private-key-to-ssh-agent.png' alt='adding privat key to ssh agent'/>
        <h2>Adding SSH Key to Your GitHub Account</h2>
        <p>
          In order to use your new/preexisting SSH key, you’ll need to add the key to your GitHub.com 
          account. Firstly, copy your SSH public key to your clipboard.
          <blockquote>
            $ pbcopy &lt; ~/.ssh/id_ed25519.pub <br/>
            # Copies the contents of the id_ed25519.pub file to your clipboard
          </blockquote>
          Secondly, navigate to the settings of your GitHub.com account. In the Access section of the 
          sidebar, click SSH and GPG keys.
          <br/><br/>
          Thirdly, click New SSH key or Add SSH key. In the Title field, add a descriptive label for the 
          new key. For example, if you’re using a personal Mac, you might call this key “Personal MacBook Air”.
          <br/><br/>
          Finally, paste your key into the Key field and click Add SSH key. If prompted, confirm your GitHub 
          password. After these steps, you should have successfully added your SSH key to your GitHub account!
          <br/><br/>
          <div className='lab-links-newtab'>
            Source: <a href='GitHub Docs - Generating a new SSH key and adding it to the ssh-agent'>
                      GitHub Docs - Generating a new SSH key and adding it to the ssh-agent
                    </a>
          </div>
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
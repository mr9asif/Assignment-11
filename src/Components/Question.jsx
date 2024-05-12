import React from 'react';

const Question = () => {
    return (
        <div className='my-24'>
        <h1 className='text-3xl mt-7 font-bold text-green-400 text-center my-6'>Frequently Asked?</h1>
        <div className='max-w-5xl mx-auto flex justify-between items-center my-6 mt-12 '>
                  
        <div className='w-1/2'>
        <div className="collapse bg-base-200 mb-1">
        <input type="radio" name="my-accordion-1" defaultChecked /> 
        <div className="collapse-title text-xl font-medium">
        What is BlogNestle all about?
        </div>
        <div className="collapse-content"> 
          <p>BlogNestle is a platform dedicated to providing insightful articles, guides, and resources on various topics such as technology, lifestyle, travel, health, and more. Our mission is to empower and inspire our readers with valuable information and practical advice.</p>
        </div>
      </div>
      <div className="collapse bg-base-200 mb-1">
        <input type="radio" name="my-accordion-1" /> 
        <div className="collapse-title text-xl font-medium">
        How can I add Blogs to BlogNestle?
        </div>
        <div className="collapse-content"> 
          <p>We welcome guest contributions from passionate writers and experts in their respective fields. If you're interested in submitting a guest post, please visit our "About Us" page for guidelines and instructions on how to pitch your ideas.</p>
        </div>
      </div>
      <div className="collapse bg-base-200 mb-1">
        <input type="radio" name="my-accordion-1" /> 
        <div className="collapse-title text-xl font-medium">
        Is BlogNestle free to access?
        </div>
        <div className="collapse-content"> 
          <p>Yes, BlogNestle is completely free to access. You can browse our articles, read blog posts, and explore our resources without any cost or subscription fees.</p>
        </div>
      </div>
      <div className="collapse bg-base-200 mb-1">
        <input type="radio" name="my-accordion-1" /> 
        <div className="collapse-title text-xl font-medium">
        Can I subscribe to receive updates from BlogNestle?
        </div>
        <div className="collapse-content"> 
          <p>Yes, you can subscribe to our newsletter to receive the latest updates, exclusive content, and special offers directly to your inbox. Simply enter your username & email address in the subscription form located on our website's homepage or sidebar.</p>
        </div>
      </div>
        </div>
        <div className='w-1/3'>
        <img src="https://i.postimg.cc/kGGt1sbD/question-box-9890616-8022563.png" alt="" />
      </div>
    </div>
        </div>
    );
};

export default Question;


import React from 'react';

const Modal6 = () => {
  return (
    <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="close-modal" data-dismiss="modal">
                    <div className="lr">
                        <div className="rl">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <div className="modal-body">
                                <h2>Project Name</h2>
                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img className="img-responsive img-centered" src="img/portfolio/dreams-preview.png" alt=""/>
                                <p>Dreams is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. It’s a beautiful template that’s designed with the Bootstrap framework in mind.</p>
                                <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/">FreebiesXpress.com</a>.</p>
                                <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Modal6;
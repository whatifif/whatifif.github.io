import React from 'react';

const Modal2 = () => {
  return (
    <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
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
                                <h2>Project Heading</h2>
                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img className="img-responsive img-centered" src="img/portfolio/startup-framework-preview.png" alt=""/>
                                <p><a href="http://designmodo.com/startup/?u=787">Startup Framework</a> is a website builder for professionals. Startup Framework contains components and complex blocks (PSD+HTML Bootstrap themes and templates) which can easily be integrated into almost any design. All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.</p>
                                <p>You can preview Startup Framework <a href="http://designmodo.com/startup/?u=787">here</a>.</p>
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

export default Modal2;
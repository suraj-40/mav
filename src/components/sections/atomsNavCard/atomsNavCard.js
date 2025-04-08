import React from "react";


const atomsNavCard=()=>{
    return(
        <section className="bg-register bg-cover bg-center bg-no-repeat lg:mb-100px">
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                                aria-controls="home" aria-selected="true">Active</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"
                                aria-controls="profile" aria-selected="false">Link</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="disabled-tab" data-bs-toggle="tab" href="#disabled" role="tab"
                                aria-controls="disabled" aria-selected="false">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h5 className="card-title">Active Tab</h5>
                            <p className="card-text">Content for the Active tab goes here.</p>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h5 className="card-title">Link Tab</h5>
                            <p className="card-text">Content for the Link tab goes here.</p>
                        </div>
                        <div className="tab-pane fade" id="disabled" role="tabpanel" aria-labelledby="disabled-tab">
                            <h5 className="card-title">Disabled Tab</h5>
                            <p className="card-text">Content for the Disabled tab goes here.</p>
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </section>
    )
}

export default atomsNavCard;
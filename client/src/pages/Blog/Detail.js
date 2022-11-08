import testImg from '../../assets/img/apple-touch-icon.png';
import tmpImg from '../../assets/img/favicon.png'

const Detail = () => {
    return (
        <>
            <main id="main" style={{ paddingTop : "90px"}}>
            <div className="container">
                <div className="row topspace">
                    {/* <!-- Article main content --> */}
                    <article className="col-sm-8 maincontent">
                        <header className="page-header">
                            <h1 className="page-title">Lorem ipsum dolor sit amet, consectetur.</h1>
                        </header>

                        <p><img src={testImg} alt="" /></p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam beatae soluta accusantium iusto nihil nesciunt unde veniam magnam repudiandae sapiente.</p>
                        <h3>Necessitatibus</h3>
                        <p>Velit, odit, eius, libero unde impedit quaerat dolorem assumenda alias consequuntur optio quae maiores ratione tempore sit aliquid architecto eligendi pariatur ab soluta doloremque dicta aspernatur labore quibusdam dolore corrupti quod inventore. Maiores, repellat, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam!</p>
                        <blockquote>Velit, odit, eius, libero unde impedit quaerat dolorem assumenda alias consequuntur optio quae maiores ratione tempore sit aliquid architecto eligendi pariatur ab soluta doloremque dicta aspernatur labore quibusdam dolore corrupti quod inventore. Maiores, repellat, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam!</blockquote>
                        <p>Velit, odit, eius, libero unde impedit quaerat dolorem assumenda alias consequuntur optio quae maiores ratione tempore sit aliquid architecto eligendi pariatur ab soluta doloremque dicta aspernatur labore quibusdam dolore corrupti quod inventore. Maiores, repellat, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam!</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus!</li>
                            <li>Laboriosam, aliquam totam asperiores nam velit voluptatum non quidem.</li>
                            <li>Voluptatem, libero quia voluptatum ab modi facere dolore assumenda?</li>
                            <li>Expedita, officia tenetur doloremque nulla temporibus ab voluptates adipisci.</li>
                            <li>Nostrum, nesciunt, inventore amet temporibus officia perferendis doloremque nulla.</li>
                            <li>Dolorum, ex earum maiores perspiciatis modi sequi odit mollitia.</li>
                        </ul>
                        
                    </article>
                    {/* <!-- /Article --> */}

                    {/* <!-- Sidebar --> */}
                    <aside className="col-md-4 sidebar sidebar-left">

                        <div className="widget">
                            <h4>Lorem ipsum dolor sit</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, ratione delectus reiciendis nulla nisi pariatur molestias animi eos repellat? Vel.</p>
                        </div>
                        <div className="widget">
                            <h4>Lorem ipsum dolor sit</h4>
                            <ul>
                                <li><a href="">Lorem ipsum </a>dolor sit amet.</li>
                                <li>Nostrum, dolores labore tempore error.</li>
                                <li>Qui esse impedit vitae repellat.</li>
                                <li>Aliquam, laborum corporis molestiae nihil.</li>
                                <li>Voluptate, labore non adipisci nihil!</li>
                            </ul>
                        </div>
                        
                    </aside>			
                    {/* <!-- /Sidebar --> */}
                    
                </div>
            {/* </div>	<!-- /container --> */}
                </div>
            </main>

            {/* comment */}
            < div class="card mb-2" style={{ paddingTop : "90px"}}>
                <div class="card-header bg-light" >
                <span class="material-symbols-outlined" style={{ paddingRight : "13px", verticalAlign: "-8px"}}>forum</span>
                        <i class="fa fa-comment fa" >REPLY</i> 
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush" >
                        <li class="list-group-item" >
                            <div class="form-inline mb-2">
                            {/* 아이디 */}
                            <span class="material-symbols-outlined">person</span>
                            <label for="replyId"><i class="fa fa-user-circle-o fa-2x"></i></label>
                            <input type="text" class="form-control ml-2" placeholder="Enter yourId" id="replyId" />
                            {/* 비번 */}
                            <span class="material-symbols-outlined" style={{ paddingTop : "7px"}}>key</span>
                            <label for="replyPassword" class="ml-4"><i class="fa fa-unlock-alt fa-2x"></i></label>
                            <input type="password" class="form-control ml-2" placeholder="Enter password" id="replyPassword" />
                        </div>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button type="button" class="btn btn-dark mt-3" onClick="javascript:addReply();">post reply</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Detail;
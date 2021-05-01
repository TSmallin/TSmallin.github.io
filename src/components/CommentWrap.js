import React, { useEffect } from "react";
import 'gitment/style/default.css'
import Gitment from 'gitment'
import "./CommentWrap.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    useEffect(() => {
        const myTheme = {
            render(state, instance) {
              const container = document.createElement('div')
              container.lang = "en-US"
              container.className = 'gitment-root-container'
              
               // your custom component
              container.appendChild(instance.renderSomething(state, instance))
              container.appendChild(instance.renderHeader(state, instance))
              container.appendChild(instance.renderComments(state, instance))
              container.appendChild(instance.renderEditor(state, instance))
              container.appendChild(instance.renderFooter(state, instance))
              return container
            },
            renderSomething(state, instance) {
              const container = document.createElement('div')
              container.lang = "en-US"
              if (state.user.login) {
                container.innerText = `Hello, ${state.user.login}`
              }
              return container
            }
          }

        const gitment = new Gitment({
            owner: 'TSmallin',
            repo: 'TSmallin.github.io',
            oauth: {
              client_id: '9db73eab1985f20d5512',
              client_secret: 'e2f99ce27246475fcf66357a8fd2d8d22dd80e42',
            },
            theme: myTheme,
            // ...
            // For more available options, check out the documentation below
          })
        //   document.body.appendChild(gitment.render())
        gitment.render(document.getElementById('comment'))
    }, [])

    return (
        <div id={"comment"}></div>
    )
}
import {Fragment,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,Heading as RadixThemesHeading,Link as RadixThemesLink,Spinner as RadixThemesSpinner,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
import {Bot as LucideBot,Info as LucideInfo,Layers as LucideLayers,MessageSquare as LucideMessageSquare,Plus as LucidePlus,Send as LucideSend} from "lucide-react"
import {Link as ReactRouterLink} from "react-router"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,getRefValue,getRefValues,isTrue} from "$/utils/state"
import {Root as RadixFormRoot} from "@radix-ui/react-form"
import {jsx} from "@emotion/react"




function Button_5af25111a1392ff0d5d19ac830e72573 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9fe87538f69505c513530dee9314b74a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.docu_ai___states___rag_state____chat_state.clear_history", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"blue",css:({ ["&:hover"] : ({ ["transform"] : "scale(1.05)" }), ["transition"] : "all 0.2s" }),onClick:on_click_9fe87538f69505c513530dee9314b74a,radius:"full",size:"2",variant:"soft"},jsx(LucidePlus,{size:18},),"New Chat")
  )
}


function Fragment_9febe94ac04d5ecadeb10e5803503e33 () {
  const reflex___state____state__docu_ai___states___rag_state____chat_state = useContext(StateContexts.reflex___state____state__docu_ai___states___rag_state____chat_state)



  return (
    jsx(Fragment,{},((reflex___state____state__docu_ai___states___rag_state____chat_state.history_rx_state_.length?.valueOf?.() === 0?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["height"] : "100%" }),direction:"column",justify:"center",gap:"3"},jsx(LucideBot,{css:({ ["color"] : "#cbd5e1", ["marginBottom"] : "10px" }),size:48},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748b", ["textAlign"] : "center" })},"I am ready to answer questions based on your uploaded documents.")))):(jsx(Fragment,{},))))
  )
}


function Fragment_e7245086f88d24789474530b620e6617 () {
  const reflex___state____state__docu_ai___states___rag_state____chat_state = useContext(StateContexts.reflex___state____state__docu_ai___states___rag_state____chat_state)



  return (
    jsx(Fragment,{},(reflex___state____state__docu_ai___states___rag_state____chat_state.is_loading_rx_state_?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["padding"] : "16px", ["background"] : "white", ["borderRadius"] : "16px 16px 16px 0", ["boxShadow"] : "0 4px 15px rgba(0,0,0,0.05)", ["marginTop"] : "10px" }),direction:"row",gap:"3"},jsx(RadixThemesSpinner,{css:({ ["color"] : "#2563eb" }),size:"2"},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748b", ["fontSize"] : "14px", ["fontWeight"] : "500" })},"Thinking...")))):(jsx(Fragment,{},))))
  )
}


function Flex_124b30dab3b8f06c25133c0cf23deff9 () {
  const reflex___state____state__docu_ai___states___rag_state____chat_state = useContext(StateContexts.reflex___state____state__docu_ai___states___rag_state____chat_state)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"4"},jsx(Fragment_9febe94ac04d5ecadeb10e5803503e33,{},),Array.prototype.map.call(reflex___state____state__docu_ai___states___rag_state____chat_state.history_rx_state_ ?? [],((item_rx_state_,index_7281961c38800c9f2ca4231dce6aaf9c)=>(jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",key:index_7281961c38800c9f2ca4231dce6aaf9c,gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesBox,{css:({ ["background"] : "#2563eb", ["padding"] : "14px 20px", ["borderRadius"] : "20px 20px 0px 20px", ["boxShadow"] : "0 4px 15px rgba(37,99,235,0.2)", ["maxWidth"] : "75%" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px" })},item_rx_state_?.["question"]))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["marginTop"] : "15px" }),direction:"row",gap:"3"},jsx(RadixThemesBox,{css:({ ["padding"] : "10px", ["background"] : "#ecfdf5", ["borderRadius"] : "full", ["marginRight"] : "10px" })},jsx(LucideBot,{css:({ ["color"] : "#10b981" }),size:24},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["maxWidth"] : "85%" }),direction:"column",gap:"3"},jsx(RadixThemesBox,{css:({ ["background"] : "white", ["padding"] : "16px 20px", ["borderRadius"] : "0px 20px 20px 20px", ["boxShadow"] : "0 4px 15px rgba(0,0,0,0.05)", ["border"] : "1px solid #f1f5f9" })},jsx(RadixThemesText,{as:"p",css:({ ["whiteSpace"] : "pre-wrap", ["color"] : "#334155", ["fontSize"] : "15px", ["lineHeight"] : "1.6" })},item_rx_state_?.["answer"])),jsx(Fragment,{},(!((item_rx_state_?.["sources"]?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginTop"] : "4px", ["paddingLeft"] : "10px" }),direction:"row",gap:"1"},jsx(LucideInfo,{css:({ ["color"] : "#94a3b8" }),size:12},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "12px", ["color"] : "#94a3b8" })},("Source: "+item_rx_state_?.["sources"]))))):(jsx(Fragment,{},)))))))))),jsx(Fragment_e7245086f88d24789474530b620e6617,{},))
  )
}


function Root_c1cc9460e652f3bf03fd980ebbe315af () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

    const handleSubmit_f7c4ae197fed2ecd2057f627f8d8b303 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.docu_ai___states___rag_state____chat_state.handle_submit", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (true) {
            $form.reset()
        }
    })
    


  return (
    jsx(RadixFormRoot,{className:"Root ",css:({ ["width"] : "100%" }),onSubmit:handleSubmit_f7c4ae197fed2ecd2057f627f8d8b303},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["paddingTop"] : "20px", ["borderTop"] : "1px solid #e2e8f0" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesTextField.Root,{css:({ ["width"] : "100%", ["height"] : "50px", ["border"] : "1px solid #cbd5e1", ["backgroundColor"] : "#ffffff", ["color"] : "#1e293b" }),name:"chat_input",placeholder:"Ask anything about your documents...",radius:"full",size:"3"},),jsx(RadixThemesButton,{css:({ ["background"] : "#2563eb", ["color"] : "white", ["padding"] : "16px", ["boxShadow"] : "0 4px 14px rgba(37,99,235,0.3)", ["&:hover"] : ({ ["background"] : "#1d4ed8", ["transform"] : "scale(1.05)" }), ["transition"] : "all 0.2s" }),radius:"full",size:"3",type:"submit"},jsx(LucideSend,{size:18},)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "50", ["background"] : "rgba(255, 255, 255, 0.85)", ["backdropFilter"] : "blur(12px)", ["borderBottom"] : "1px solid rgba(226, 232, 240, 0.8)", ["boxShadow"] : "0 4px 20px -2px rgba(0, 0, 0, 0.05)" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "30px", ["paddingInlineEnd"] : "30px", ["paddingTop"] : "15px", ["paddingBottom"] : "15px", ["maxWidth"] : "1200px", ["margin"] : "0 auto" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"2"},jsx(LucideLayers,{css:({ ["color"] : "#2563eb" }),size:28},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "22px", ["fontWeight"] : "800", ["color"] : "#0f172a", ["letterSpacing"] : "-0.5px" })},"DocuSearch AI")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"6"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["transition"] : "all 0.2s", ["fontWeight"] : "600", ["color"] : "#475569" })},jsx(ReactRouterLink,{to:"/"},"Home")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["transition"] : "all 0.2s", ["fontWeight"] : "600", ["color"] : "#475569" })},jsx(ReactRouterLink,{to:"/upload"},"Upload")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["transition"] : "all 0.2s", ["fontWeight"] : "600", ["color"] : "#475569" })},jsx(ReactRouterLink,{to:"/chat"},"Chat")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["transition"] : "all 0.2s", ["fontWeight"] : "600", ["color"] : "#475569" })},jsx(ReactRouterLink,{to:"/history"},"History"))))),jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["background"] : "#f1f5f9", ["padding"] : "40px 20px", ["minHeight"] : "100vh" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["maxWidth"] : "900px", ["margin"] : "0 auto", ["background"] : "white", ["borderRadius"] : "24px", ["boxShadow"] : "0 20px 40px -15px rgba(0,0,0,0.1)", ["padding"] : "30px", ["height"] : "85vh", ["overflow"] : "hidden" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["paddingTop"] : "20px", ["paddingBottom"] : "20px", ["borderBottom"] : "1px solid #e2e8f0", ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"2"},jsx(LucideMessageSquare,{css:({ ["color"] : "#2563eb" }),size:24},),jsx(RadixThemesHeading,{css:({ ["color"] : "#0f172a" }),size:"6"},"Secure AI Assistant")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Button_5af25111a1392ff0d5d19ac830e72573,{},)),jsx(RadixThemesBox,{css:({ ["&::-webkit-scrollbar"] : ({ ["width"] : "6px" }), ["&::-webkit-scrollbar-thumb"] : ({ ["background"] : "#cbd5e1", ["borderRadius"] : "3px" }), ["width"] : "100%", ["flex"] : "1", ["overflowY"] : "auto", ["paddingTop"] : "20px", ["paddingBottom"] : "20px", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px" })},jsx(Flex_124b30dab3b8f06c25133c0cf23deff9,{},)),jsx(Root_c1cc9460e652f3bf03fd980ebbe315af,{},)))),jsx("title",{},"DocuAi | Chat"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}
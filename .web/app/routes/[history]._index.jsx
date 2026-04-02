import {Fragment,useCallback,useContext,useEffect} from "react"
import {Badge as RadixThemesBadge,Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,Heading as RadixThemesHeading,Link as RadixThemesLink,Text as RadixThemesText} from "@radix-ui/themes"
import {Clock as LucideClock,Download as LucideDownload,History as LucideHistory,Layers as LucideLayers,Trash2 as LucideTrash2,User as LucideUser} from "lucide-react"
import {Link as ReactRouterLink} from "react-router"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isTrue} from "$/utils/state"
import {jsx} from "@emotion/react"




function Button_4c0e25777d9132da5fa6f71afaeb1b4d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9fe87538f69505c513530dee9314b74a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.docu_ai___states___rag_state____chat_state.clear_history", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"red",css:({ ["&:hover"] : ({ ["background"] : "#fee2e2" }) }),onClick:on_click_9fe87538f69505c513530dee9314b74a,size:"3",variant:"soft"},jsx(LucideTrash2,{size:16},),"Clear History")
  )
}


function Button_dccbefe1193bc52de0ce7e941e331ac0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_fc20cb15fe06a9d41bde3032923e46e8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.docu_ai___states___rag_state____chat_state.download_chat", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"blue",css:({ ["boxShadow"] : "0 4px 14px 0 rgba(0, 118, 255, 0.39)" }),onClick:on_click_fc20cb15fe06a9d41bde3032923e46e8,size:"3"},jsx(LucideDownload,{size:16},),"Download PDF")
  )
}


function Flex_ec602c1b50a229cf2f45464ef84e285e () {
  const reflex___state____state__docu_ai___states___rag_state____chat_state = useContext(StateContexts.reflex___state____state__docu_ai___states___rag_state____chat_state)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"4"},Array.prototype.map.call(reflex___state____state__docu_ai___states___rag_state____chat_state.history_rx_state_ ?? [],((item_rx_state_,index_7281961c38800c9f2ca4231dce6aaf9c)=>(jsx(RadixThemesBox,{css:({ ["&:hover"] : ({ ["boxShadow"] : "0 10px 15px -3px rgba(0,0,0,0.05)", ["transform"] : "translateY(-1px)" }), ["transition"] : "all 0.2s ease", ["padding"] : "24px", ["background"] : "white", ["border"] : "1px solid #e2e8f0", ["borderRadius"] : "16px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.02)", ["width"] : "100%" }),key:index_7281961c38800c9f2ca4231dce6aaf9c},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginBottom"] : "10px" }),direction:"row",gap:"2"},jsx(LucideUser,{css:({ ["color"] : "#2563eb" }),size:16},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["color"] : "#1e293b" }),size:"3"},item_rx_state_?.["question"])),jsx(RadixThemesBox,{css:({ ["padding"] : "16px", ["background"] : "#f1f5f9", ["borderRadius"] : "12px", ["borderLeft"] : "4px solid #10b981", ["width"] : "100%", ["marginBottom"] : "10px" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#475569", ["lineHeight"] : "1.6", ["fontSize"] : "15px" })},item_rx_state_?.["answer"])),jsx(Fragment,{},(!((item_rx_state_?.["sources"]?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginTop"] : "5px" }),direction:"row",gap:"3"},jsx(RadixThemesBadge,{color:"gray",radius:"full",variant:"soft"},item_rx_state_?.["sources"])))):(jsx(Fragment,{},))))))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "30px", ["width"] : "100%" }),direction:"row",justify:"end",gap:"4"},jsx(Button_4c0e25777d9132da5fa6f71afaeb1b4d,{},),jsx(Button_dccbefe1193bc52de0ce7e941e331ac0,{},)))
  )
}


function Fragment_4e81f22517e7253f810971b6360ff074 () {
  const reflex___state____state__docu_ai___states___rag_state____chat_state = useContext(StateContexts.reflex___state____state__docu_ai___states___rag_state____chat_state)



  return (
    jsx(Fragment,{},((reflex___state____state__docu_ai___states___rag_state____chat_state.history_rx_state_.length?.valueOf?.() === 0?.valueOf?.())?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["padding"] : "60px", ["border"] : "2px dashed #e2e8f0", ["borderRadius"] : "16px", ["background"] : "#f8fafc", ["width"] : "100%" }),direction:"column",gap:"3"},jsx(LucideClock,{css:({ ["color"] : "#cbd5e1", ["marginBottom"] : "10px" }),size:48},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "600", ["color"] : "#475569" }),size:"4"},"No chat history available."),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#94a3b8" })},"Your past interactions will appear here."))))):(jsx(Fragment,{},jsx(Flex_ec602c1b50a229cf2f45464ef84e285e,{},)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "#f8fafc", ["paddingBottom"] : "60px" }),direction:"column",gap:"3"},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "50", ["background"] : "rgba(255, 255, 255, 0.85)", ["backdropFilter"] : "blur(12px)", ["borderBottom"] : "1px solid rgba(226, 232, 240, 0.8)", ["boxShadow"] : "0 4px 20px -2px rgba(0, 0, 0, 0.05)" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "30px", ["paddingInlineEnd"] : "30px", ["paddingTop"] : "15px", ["paddingBottom"] : "15px", ["maxWidth"] : "1200px", ["margin"] : "0 auto" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"2"},jsx(LucideLayers,{css:({ ["color"] : "#2563eb" }),size:28},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "22px", ["fontWeight"] : "800", ["color"] : "#0f172a", ["letterSpacing"] : "-0.5px" })},"DocuSearch AI")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"6"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["transition"] : "all 0.2s", ["fontWeight"] : "600", ["color"] : "#475569" })},jsx(ReactRouterLink,{to:"/"},"Home")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["transition"] : "all 0.2s", ["fontWeight"] : "600", ["color"] : "#475569" })},jsx(ReactRouterLink,{to:"/upload"},"Upload")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["transition"] : "all 0.2s", ["fontWeight"] : "600", ["color"] : "#475569" })},jsx(ReactRouterLink,{to:"/chat"},"Chat")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["transition"] : "all 0.2s", ["fontWeight"] : "600", ["color"] : "#475569" })},jsx(ReactRouterLink,{to:"/history"},"History"))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["maxWidth"] : "800px", ["margin"] : "0 auto", ["padding"] : "40px", ["background"] : "white", ["borderRadius"] : "24px", ["boxShadow"] : "0 10px 40px -10px rgba(0,0,0,0.05)", ["border"] : "1px solid #e2e8f0", ["marginTop"] : "40px" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginBottom"] : "20px" }),direction:"row",gap:"3"},jsx(LucideHistory,{css:({ ["color"] : "#0f172a" }),size:28},),jsx(RadixThemesHeading,{css:({ ["color"] : "#0f172a", ["fontWeight"] : "800" }),size:"7"},"Conversation History")),jsx(Fragment_4e81f22517e7253f810971b6360ff074,{},))),jsx("title",{},"DocuAi | History"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}
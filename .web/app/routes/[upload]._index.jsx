import {Fragment,useCallback,useContext,useEffect,useRef} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,Heading as RadixThemesHeading,Link as RadixThemesLink,Spinner as RadixThemesSpinner,Text as RadixThemesText} from "@radix-ui/themes"
import {EventLoopContext,StateContexts,UploadFilesContext} from "$/utils/context"
import {ReflexEvent,isTrue,refs} from "$/utils/state"
import {CircleHelp as LucideCircleHelp,FileText as LucideFileText,Layers as LucideLayers,MessageSquare as LucideMessageSquare,Trash2 as LucideTrash2,Upload as LucideUpload} from "lucide-react"
import {Link as ReactRouterLink} from "react-router"
import {} from "react-dropzone"
import {useDropzone} from "react-dropzone"
import {jsx} from "@emotion/react"




function Comp_e384174ea20971291e90bfd790fa16a4 () {
  const ref_upload1 = useRef(null); refs["ref_upload1"] = ref_upload1;
const [addEvents, connectErrors] = useContext(EventLoopContext);
const [filesById, setFilesById] = useContext(UploadFilesContext);
const on_drop_0db64617fc696f4b223306ba8c435f5b = useCallback(e => setFilesById(filesById => {
    const updatedFilesById = Object.assign({}, filesById);
    updatedFilesById["upload1"] = e;
    return updatedFilesById;
  })
    , [addEvents, ReflexEvent, filesById, setFilesById])
const on_drop_rejected_2fcedbdc0771e7617b4270e2d1ac8cc9 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => (refs['__toast']?.["error"]("", ({ ["title"] : "Files not Accepted", ["description"] : _ev_0.map(((osizayzf) => (osizayzf?.["file"]?.["path"]+": "+osizayzf?.["errors"].map(((wnkiegyk) => wnkiegyk?.["message"])).join(", ")))).join("\n\n"), ["closeButton"] : true, ["style"] : ({ ["whiteSpace"] : "pre-line" }) })))), ["callback"] : null }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const { getRootProps: xdvxrcsn, getInputProps: udaxihhe, isDragActive: bacghqta} = useDropzone(({ ["multiple"] : true, ["id"] : "upload1", ["onDrop"] : on_drop_0db64617fc696f4b223306ba8c435f5b, ["onDropRejected"] : on_drop_rejected_2fcedbdc0771e7617b4270e2d1ac8cc9 }));



  return (
    jsx(Fragment,{},jsx(RadixThemesBox,{className:"rx-Upload",css:({ ["&:hover"] : ({ ["borderColor"] : "#3b82f6", ["background"] : "#eff6ff" }), ["transition"] : "all 0.2s", ["border"] : "2px dashed #cbd5e1", ["borderRadius"] : "16px", ["background"] : "#f8fafc", ["width"] : "100%", ["padding"] : "5em", ["textAlign"] : "center" }),id:"upload1",ref:ref_upload1,...xdvxrcsn()},jsx("input",{type:"file",...udaxihhe()},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["padding"] : "40px" }),direction:"column",justify:"center",gap:"3"},jsx(LucideCircleHelp,{css:({ ["color"] : "#3b82f6", ["marginBottom"] : "15px" }),size:48},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "600", ["fontSize"] : "18px", ["color"] : "#1e293b" })},"Drag and drop your files here"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748b", ["fontSize"] : "14px" })},"or click to browse"))))
  )
}


function Flex_dd1dbf05a0237ecb054154788c8694e2 () {
  const [filesById, setFilesById] = useContext(UploadFilesContext);



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "600", ["fontSize"] : "14px", ["color"] : "#475569", ["marginTop"] : "20px" })},"Queued for upload:"),Array.prototype.map.call((filesById["upload1"] ? filesById["upload1"].map((f) => f.name) : []) ?? [],((f_rx_state_,index_bd872b92bbf1b64a273b091d0f1b7e0f)=>(jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["background"] : "#f1f5f9", ["padding"] : "8px 16px", ["borderRadius"] : "8px", ["width"] : "100%" }),direction:"row",key:index_bd872b92bbf1b64a273b091d0f1b7e0f,gap:"3"},jsx(LucideFileText,{css:({ ["color"] : "#3b82f6" }),size:16},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#1e293b", ["fontWeight"] : "500" })},f_rx_state_))))))
  )
}


function Fragment_64e93ed32fd7e6b174018f2e82621ece () {
  const [filesById, setFilesById] = useContext(UploadFilesContext);



  return (
    jsx(Fragment,{},(isTrue((filesById["upload1"] ? filesById["upload1"].map((f) => f.name) : []))?(jsx(Fragment,{},jsx(Flex_dd1dbf05a0237ecb054154788c8694e2,{},))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))
  )
}


function Button_58c460335187443c1a413693e763e018 () {
  const [filesById, setFilesById] = useContext(UploadFilesContext);
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f5a90e779781d2bda630a4089b75a781 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.docu_ai___pages___upload____upload_state.handle_upload", ({ ["files"] : filesById?.["upload1"], ["upload_id"] : "upload1", ["extra_headers"] : ({  }) }), ({  }), "uploadFiles"))], [_e], ({  })))), [addEvents, ReflexEvent, filesById, setFilesById])

  return (
    jsx(RadixThemesButton,{color:"blue",css:({ ["&:hover"] : ({ ["transform"] : "translateY(-1px)", ["boxShadow"] : "0 6px 20px rgba(0,118,255,0.23)" }), ["width"] : "100%", ["marginTop"] : "24px", ["borderRadius"] : "8px", ["boxShadow"] : "0 4px 14px 0 rgba(0, 118, 255, 0.39)" }),disabled:((filesById["upload1"] ? filesById["upload1"].map((f) => f.name) : []).length?.valueOf?.() === 0?.valueOf?.()),onClick:on_click_f5a90e779781d2bda630a4089b75a781,size:"4"},"Upload Documents",jsx(LucideUpload,{size:16},))
  )
}


function Fragment_d5d28768f9a923753fe07e0152f29edb () {
  const reflex___state____state__docu_ai___pages___upload____upload_state = useContext(StateContexts.reflex___state____state__docu_ai___pages___upload____upload_state)



  return (
    jsx(Fragment,{},(reflex___state____state__docu_ai___pages___upload____upload_state.is_uploading_rx_state_?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginTop"] : "24px", ["width"] : "100%", ["padding"] : "12px", ["background"] : "#eff6ff", ["borderRadius"] : "8px" }),direction:"row",justify:"center",gap:"3"},jsx(RadixThemesSpinner,{size:"3"},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#3b82f6", ["fontWeight"] : "500" })},"Processing documents...")))):(jsx(Fragment,{},jsx(Button_58c460335187443c1a413693e763e018,{},)))))
  )
}


function Flex_3a9bda1d2c199ac2a81b7271267338eb () {
  const reflex___state____state__docu_ai___pages___upload____upload_state = useContext(StateContexts.reflex___state____state__docu_ai___pages___upload____upload_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},Array.prototype.map.call(reflex___state____state__docu_ai___pages___upload____upload_state.files_rx_state_ ?? [],((file_rx_state_,index_4a8c96270ec7c02889d04b1ca9c9445d)=>(jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "16px", ["background"] : "white", ["borderRadius"] : "12px", ["border"] : "1px solid #e2e8f0", ["boxShadow"] : "0 2px 4px rgba(0,0,0,0.02)" }),direction:"row",key:index_4a8c96270ec7c02889d04b1ca9c9445d,gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideCircleHelp,{css:({ ["color"] : "#10b981" }),size:18},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "500", ["color"] : "#334155" })},file_rx_state_)),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesButton,{color:"red",css:({ ["borderRadius"] : "8px" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.docu_ai___pages___upload____upload_state.delete_file", ({ ["filename"] : file_rx_state_ }), ({  })))], [_e], ({  })))),size:"2",variant:"soft"},jsx(LucideTrash2,{size:16},)))))))
  )
}


function Fragment_d936117f8318d84a013f58b773ef24af () {
  const reflex___state____state__docu_ai___pages___upload____upload_state = useContext(StateContexts.reflex___state____state__docu_ai___pages___upload____upload_state)



  return (
    jsx(Fragment,{},((reflex___state____state__docu_ai___pages___upload____upload_state.files_rx_state_.length > 0)?(jsx(Fragment,{},jsx(Flex_3a9bda1d2c199ac2a81b7271267338eb,{},))):(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["width"] : "100%" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#94a3b8", ["textAlign"] : "center", ["padding"] : "30px", ["border"] : "1px dashed #cbd5e1", ["borderRadius"] : "12px" })},"No documents uploaded yet. Add files above to train the AI."))))))
  )
}


function Button_6ba326c6637458499b0197c0d616f7f0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_e7eac867e936ac21691728d988d6c8ed = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.docu_ai___pages___upload____upload_state.close_dialog", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",onClick:on_click_e7eac867e936ac21691728d988d6c8ed,size:"3",variant:"outline"},"Stay Here")
  )
}


function Button_fe6b522dfc18273f5471f6fe04235250 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9ca09a608fc72a1f52ec597d6e076be2 = useCallback(((_e) => (addEvents([(ReflexEvent("_redirect", ({ ["path"] : "/chat", ["external"] : false, ["popup"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"blue",onClick:on_click_9ca09a608fc72a1f52ec597d6e076be2,size:"3"},"Chat with AI",jsx(LucideMessageSquare,{size:16},))
  )
}


function Fragment_c628257b2794b9a90a041d7948fdbe15 () {
  const reflex___state____state__docu_ai___pages___upload____upload_state = useContext(StateContexts.reflex___state____state__docu_ai___pages___upload____upload_state)



  return (
    jsx(Fragment,{},(reflex___state____state__docu_ai___pages___upload____upload_state.show_success_dialog_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "0", ["left"] : "0", ["width"] : "100vw", ["height"] : "100vh", ["background"] : "rgba(15, 23, 42, 0.4)", ["backdropFilter"] : "blur(4px)", ["zIndex"] : "100", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["padding"] : "20px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["background"] : "white", ["padding"] : "40px", ["borderRadius"] : "24px", ["boxShadow"] : "0 25px 50px -12px rgba(0, 0, 0, 0.25)", ["maxWidth"] : "450px" }),direction:"column",gap:"3"},jsx(LucideCircleHelp,{css:({ ["color"] : "#10b981", ["marginBottom"] : "10px" }),size:48},),jsx(RadixThemesHeading,{css:({ ["color"] : "#0f172a" }),size:"6"},"Upload Complete"),jsx(RadixThemesText,{as:"p",css:({ ["textAlign"] : "center", ["color"] : "#475569" })},"Your documents have been securely processed and added to the Knowledge Base."),jsx(RadixThemesText,{as:"p",css:({ ["textAlign"] : "center", ["fontWeight"] : "500", ["marginTop"] : "10px", ["color"] : "#1e293b" })},"Would you like to ask the AI questions about these documents now?"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "20px" }),direction:"row",gap:"4"},jsx(Button_6ba326c6637458499b0197c0d616f7f0,{},),jsx(Button_fe6b522dfc18273f5471f6fe04235250,{},)))))):(jsx(Fragment,{},))))
  )
}


function Flex_119e06712d631c5a1163e6878d7733bc () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.docu_ai___pages___upload____upload_state.load_files", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"0"},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "50", ["background"] : "rgba(255, 255, 255, 0.85)", ["backdropFilter"] : "blur(12px)", ["borderBottom"] : "1px solid rgba(226, 232, 240, 0.8)", ["boxShadow"] : "0 4px 20px -2px rgba(0, 0, 0, 0.05)" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "30px", ["paddingInlineEnd"] : "30px", ["paddingTop"] : "15px", ["paddingBottom"] : "15px", ["maxWidth"] : "1200px", ["margin"] : "0 auto" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"2"},jsx(LucideLayers,{css:({ ["color"] : "#2563eb" }),size:28},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "22px", ["fontWeight"] : "800", ["color"] : "#0f172a", ["letterSpacing"] : "-0.5px" })},"DocuSearch AI")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"6"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["transition"] : "all 0.2s", ["fontWeight"] : "600", ["color"] : "#475569" })},jsx(ReactRouterLink,{to:"/"},"Home")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["transition"] : "all 0.2s", ["fontWeight"] : "600", ["color"] : "#475569" })},jsx(ReactRouterLink,{to:"/upload"},"Upload")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["transition"] : "all 0.2s", ["fontWeight"] : "600", ["color"] : "#475569" })},jsx(ReactRouterLink,{to:"/chat"},"Chat")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["transition"] : "all 0.2s", ["fontWeight"] : "600", ["color"] : "#475569" })},jsx(ReactRouterLink,{to:"/history"},"History"))))),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingTop"] : "60px", ["paddingBottom"] : "100px", ["background"] : "#f8fafc", ["minHeight"] : "90vh" }),direction:"column",gap:"3"},jsx(RadixThemesHeading,{css:({ ["color"] : "#0f172a", ["fontWeight"] : "800", ["marginBottom"] : "10px" }),size:"8"},"Data Knowledge Base"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748b", ["fontSize"] : "16px", ["marginBottom"] : "30px" })},"Upload PDF or text files to securely train your local RAG agent."),jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["maxWidth"] : "600px", ["background"] : "white", ["padding"] : "40px", ["borderRadius"] : "24px", ["boxShadow"] : "0 10px 40px -10px rgba(0,0,0,0.08)", ["border"] : "1px solid #e2e8f0" })},jsx(Comp_e384174ea20971291e90bfd790fa16a4,{},),jsx(Fragment_64e93ed32fd7e6b174018f2e82621ece,{},),jsx(Fragment_d5d28768f9a923753fe07e0152f29edb,{},)),jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["maxWidth"] : "600px", ["marginTop"] : "40px" })},jsx(RadixThemesHeading,{css:({ ["color"] : "#0f172a", ["marginBottom"] : "20px" }),size:"5"},"Active Knowledge Base"),jsx(Fragment_d936117f8318d84a013f58b773ef24af,{},)),jsx(Fragment_c628257b2794b9a90a041d7948fdbe15,{},)))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Flex_119e06712d631c5a1163e6878d7733bc,{},),jsx("title",{},"DocuAi | Upload"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}
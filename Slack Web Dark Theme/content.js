if ($) {
  var bg = '#303e4d'
  var bgDark = '#212b35'
  var text = '#acb2b8'
  var link = '#dadada!important'
  var button = 'none!important'
  var highlight = '#8c7208'
  var accent = '#bd6542'
  $("<style type='text/css'>" +
  'body{background: ' + bg + ';}' +
  '.p-channel_sidebar__channel.p-channel_sidebar__channel--unread, .comment .mention, .ql-editor .mention, ts-message .mention{background: ' + accent + ';}' +
  '.btn_outline{background: ' + accent + '!important; color: ' + link + '}' +
  '#col_flex{background: ' + bg + ';}' +
  'ts-icon{color: ' + accent + ';}' +
  '.feature_sli_file_search #search_results.all, .feature_sli_file_search #search_results.messages, .feature_sli_file_search #search_results.all .search_message_result, .feature_sli_file_search #search_results.messages .search_message_result{background: ' + bg + ';}' +
  '.feature_sli_file_search #search_results.all .top_search_results .search_message_result, .ql-container.texty_single_line_input, .menu .section_header .header_label{background: ' + 'none' + ';}' +
  '.message_body, #flex_contents .heading_text, #im_title, .ts_icon, .comment, .modal label, h1, h2, h3, h4, h5, h6, #select_share_channels .lazy_filter_select .lfs_item{color: ' + text + ';}' +
  '.search_result_with_extract, .supports_custom_scrollbar .team_menu.slack_menu .menu_content, .menu{background: ' + bgDark + ';}' +
  'span.match{background: ' + highlight + ';}' +
  '.light_theme ts-message .message_content .message_sender{color: ' + 'white' + '!important;}' +
  '#channel_topic_text{background: ' + bg + ';}' +
  '.day_divider{background: ' + bg + ';}' +
  '.day_divider_label{background: ' + link + ';}' +
  '#footer{background-image: none;}' +
  '.channel_header, .lazy_filter_select .lfs_list_container{background: ' + bg + ';}' +
  '.feature_sli_file_search #search_results_container .heading, .modal-footer, #file_comment_textarea.texty_comment_input, .comment_form .texty_comment_input, .edit_comment_form .texty_comment_input{background: ' + bg + ';}' +
  '.feature_sli_file_search #search_results_container #search_options, .modal, .slack_menu_download{background-color: ' + bg + ';}' +
  '#msg_input{background: ' + bg + ';}' +
  '#client_body:not(.onboarding):before{background: ' + bg + ';}' +
  'ts-message .bot_label{background: ' + bg + ';!important}' +
  'button{background: ' + button + ';}' +
  'span, .bot_message .message_sender, .bot_message .message_sender a, .menu ul li a{color: ' + link + ';}' +
  '.ql-editor blockquote, .ql-editor h1, .ql-editor h2, .ql-editor h3, .ql-editor h4, .ql-editor h5, .ql-editor h6, .ql-editor ol, .ql-editor pre, .ql-editor ul{background: ' + bg + '; color: white;}' +
  '.ql-editor p{color: ' + link + ';}' +
  'ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply), ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply), ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply){background: ' + bgDark + ';}' +
  '::-webkit-input-placeholder, :-moz-placeholder, :-ms-input-placeholder {color:' + text + ';}' +
  '.supports_custom_scrollbar:not(.slim_scrollbar) #app_space_scroller_div::-webkit-scrollbar-thumb, .supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-thumb, .supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-thumb{background: ' + bgDark + ';}' +
  '.supports_custom_scrollbar:not(.slim_scrollbar) #app_space_scroller_div::-webkit-scrollbar-track, .supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-track, .supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-track{background: ' + bg + ';}' +
  '.supports_custom_scrollbar:not(.slim_scrollbar) #app_space_scroller_div::-webkit-scrollbar-thumb, .supports_custom_scrollbar:not(.slim_scrollbar) #app_space_scroller_div::-webkit-scrollbar-track, .supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-thumb, .supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-track, .supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-thumb, .supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-track{color: ' + bg + ';}' +
  '.ql-placeholder{color: ' + link + '; filter: none; opacity: 1;}' +
  '</style>').appendTo('head')
} else {
  alert('no jq')
}
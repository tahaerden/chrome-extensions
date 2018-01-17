if ($) {
  var bg = '#282c34'
  var bgDark = '#21252b'
  var text = '#9da5b4'
  var link = '#9da5b4!important'
  var button = 'none!important'
  var highlight = '#8c7208'
  var border = '#1c1f25'
  var accent = '#bd6542'
  $("<style type='text/css'>" +
  'body{background: ' + bg + ';}' +
  '.p-channel_sidebar__channel.p-channel_sidebar__channel--unread, .comment .mention, .ql-editor .mention, ts-message .mention{background: ' + accent + ';}' +
  '.btn_outline{background: ' + accent + '!important; color: ' + link + '}' +
  '#col_flex, .client_channels_list_container, .p-channel_sidebar{background: ' + bg + '!important;}' +
  'ts-icon{color: ' + 'white' + ';}' +
  '.feature_sli_file_search #search_results.all, .feature_sli_file_search #search_results.messages, .feature_sli_file_search #search_results.all .search_message_result, .feature_sli_file_search #search_results.messages .search_message_result{background: ' + bg + ';}' +
  '.feature_sli_file_search #search_results.all .top_search_results .search_message_result, .ql-container.texty_single_line_input, .menu .section_header .header_label{background: ' + 'none' + ';}' +
  '.message_body, #flex_contents .heading_text, #im_title, .ts_icon, .comment, .modal label, h1, h2, h3, h4, h5, h6, #select_share_channels .lazy_filter_select .lfs_item{color: ' + text + ';}' +
  '.search_result_with_extract, .supports_custom_scrollbar .team_menu.slack_menu .menu_content, .menu, .menu_content{background: ' + bgDark + '!important;}' +
  'span.match{background: ' + highlight + ';}' +
  '.light_theme ts-message .message_content .message_sender, .c-message--light .c-message__sender .c-message__sender_link{color: ' + 'white' + '!important;}' +
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
  'ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply), ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply), ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply){background: ' + 'red' + ';}' +
  '::-webkit-input-placeholder, :-moz-placeholder, :-ms-input-placeholder {color:' + text + ';}' +
  '.supports_custom_scrollbar:not(.slim_scrollbar) #app_space_scroller_div::-webkit-scrollbar-thumb, .supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-thumb, .supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-thumb{background: ' + bgDark + ';}' +
  '.supports_custom_scrollbar:not(.slim_scrollbar) #app_space_scroller_div::-webkit-scrollbar-track, .supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-track, .supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-track{background: ' + bg + ';}' +
  '.supports_custom_scrollbar:not(.slim_scrollbar) #app_space_scroller_div::-webkit-scrollbar-thumb, .supports_custom_scrollbar:not(.slim_scrollbar) #app_space_scroller_div::-webkit-scrollbar-track, .supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-thumb, .supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-track, .supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-thumb, .supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-track{color: ' + bg + ';}' +
  '.ql-placeholder{color: ' + link + '; filter: none; opacity: 1;}' +
  '.channel_header, #col_messages, #footer{box-shadow: inset 1px 0 0 0 ' + border + ';}' +
  '.p-channel_sidebar__badge{color: white!important;}' +
  '.c-message:hover:not(.c-message--highlight):not(.c-message--standalone):not(.c-message--pinned):not(.c-message--ephemeral):not(.c-message--custom_response):not(.c-message--starred):not(.c-message--sli_highlight), .c-message--hover:not(.c-message--highlight):not(.c-message--standalone):not(.c-message--pinned):not(.c-message--ephemeral):not(.c-message--custom_response):not(.c-message--starred):not(.c-message--sli_highlight), .c-message--focus:not(.c-message--highlight):not(.c-message--standalone):not(.c-message--pinned):not(.c-message--ephemeral):not(.c-message--custom_response):not(.c-message--starred):not(.c-message--sli_highlight){background-color: ' + bgDark + ';}' +
  '.p-message_pane .c-message_list:not(.c-virtual_list--scrollbar):before, .p-message_pane .c-message_list.c-virtual_list--scrollbar > .c-scrollbar__hider:before{border-bottom: 0px; background: ' + bg + ';!important}' +
  '</style>').appendTo('head')
} else {
  alert('no jq')
}

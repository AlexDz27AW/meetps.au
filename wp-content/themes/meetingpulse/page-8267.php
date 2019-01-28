<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <?php get_template_part( 'header', 'meta' ); ?>

    <link rel='stylesheet' href='<?php echo esc_url( get_template_directory_uri() ); ?>/css/app.css' />
    <script>

window['_fs_debug'] = false;
window['_fs_host'] = 'fullstory.com';
window['_fs_org'] = '1J9MS';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
    o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
    y="rec";g.shutdown=function(i,v){g(y,!1)};g.restart=function(i,v){g(y,!0)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
})(window,document,window['_fs_namespace'],'script','user');

</script>
</head>
<body <?php body_class(); ?>>

<div class="out">
    <?php get_template_part( 'header', 'inner' ); ?>

    <!-- features-->
    <div class="features">
        <div class="features__center center">
            <div class="features__container">
                <div class="features__item">
                    <div class="features__icon"><svg class="icon icon-time"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-time"></use></svg></div>
                    <div class="features__wrap">
                        <div class="features__name">Effortless</div>
                        <div class="features__text">Takes minutes to get started, <br>seconds to start a meeting.</div>
                        <!-- version-->

                    </div>
                </div>
                <div class="features__item">
                    <div class="features__icon"><svg class="icon icon-unit"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-unit"></use></svg></div>
                    <div class="features__wrap">
                        <div class="features__name">Access via short link</div>
                        <div class="features__text">Attendees join instantly on their <br>devices via a short link.</div>
                        <!-- version-->

                    </div>
                </div>
                <div class="features__item">
                    <div class="features__icon"><svg class="icon icon-cloud"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-cloud"></use></svg></div>
                    <div class="features__wrap">
                        <div class="features__name">No installs</div>
                        <div class="features__text">Works in any browser: no app <br>installs or downloads required.</div>
                        <!-- version-->

                    </div>
                </div>
                <div class="features__item">
                    <div class="features__icon"><svg class="icon icon-diagram"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-diagram"></use></svg></div>
                    <div class="features__wrap">
                        <div class="features__name">Scalable</div>
                        <div class="features__text">Built on a cloud infrastructure that supports tens of thousands of active participants</div>

                    </div>
                </div>
                <div class="features__item">
                    <div class="features__icon"><svg class="icon icon-slider"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-slider"></use></svg></div>
                    <div class="features__wrap">
                        <div class="features__name">Customizable</div>
                        <div class="features__text">Make it yours. Enable only the features <br>you need and apply your own branding.</div>

                    </div>
                </div>
                <div class="features__item">
                    <div class="features__icon"><svg class="icon icon-phone"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-phone"></use></svg></div>
                    <div class="features__wrap">
                        <div class="features__name">Mobile-first</div>
                        <div class="features__text">The UI feels like an app: it’s optimized for <br>phones, gesture-based and intuitive.</div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- services-->
    <div class="services js-tabs">
        <div class="services__head">
            <div class="services__center center">
                <div class="services__nav"><a class="services__link active js-tabs-link" href="#">Q&A</a><a class="services__link js-tabs-link" href="#">Polls</a><a class="services__link js-tabs-link" href="#">Surveys</a><a class="services__link js-tabs-link" href="#">Quizzes</a>
                    <a class="services__link js-tabs-link" href="#">Pulse</a><a class="services__link js-tabs-link" href="#">Raffles</a><a class="services__link js-tabs-link" href="#">Reports</a><a class="services__link js-tabs-link" href="#">Security</a><a class="services__link js-tabs-link" href="#">Customization</a>
                    <a class="services__link js-tabs-link" href="#">Event management</a>
                </div>
                <div class="services__links links">
                    <a class="links__blue" href="/#pricing">Learn More</a>
                </div>
            </div>
        </div>
        <div class="services__container">
            <div class="services__item js-tabs-item" id="qa-section" style="display: block;">
                <div class="services__center center">
                    <div class="services__col">
                        <div class="services__questions">
                            <div class="services__title">Q&A</div>
                            <div class="services__text">Live audience Q&A lets you know what’s on their mind: collect questions from your audience before, during or after the meeting or event. Allow voting on submitted questions to shape the agenda ahead of time by surfacing the most popular
                                topics.</div>
                            <div class="services__info">Q&A options:</div>
                            <div class="services__wrap">
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_free">free</div>
                                        <div class="version__text">Export CSV
                                            <div class="version__description">Provides an option to export data to a CSV file</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_free">free</div>
                                        <div class="version__text">Anonymously ask questions
                                            <div class="version__description">Attendees can participate without revealing their identity</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_free">free</div>
                                        <div class="version__text">Question upvotes
                                            <div class="version__description">Allow attendees to upvote or downvote questions so you can focus on popular questions</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_light">light</div>
                                        <div class="version__text">Broadcast view
                                            <div class="version__description">Shows one question at a time with its scores. Useful when projected on the large presentation screen in front of the room. Can also be embedded in slides</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_light">light</div>
                                        <div class="version__text">Discussion threads
                                            <div class="version__description">Attendees can leave comments under each question. Boosts discussion and engagement</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Popular vs. Newest
                                            <div class="version__description">Allows the attendee the option to sort questions based on either popularity or newness</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Mark as answered
                                            <div class="version__description">The presenter may mark a question as answered to hide it</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Moderation
                                            <div class="version__description">Allows presenter to take control of Q&A by approving or editing incoming questions</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Edit questions
                                            <div class="version__description">Edit submitted questions and comments for clarity.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="services__col">
                        <div class="screen">
                            <div class="screen__wrap">
                                <div class="screen__phone">
                                    <div class="screen__info">Top questions
                                        <div class="screen__list">
                                            <div class="screen__item">
                                                <div class="screen__number">24</div>
                                                <div class="screen__text">What are the dates for the upcoming offsite?</div>
                                            </div>
                                            <div class="screen__item">
                                                <div class="screen__number">15</div>
                                                <div class="screen__text">What does the holiday schedule look like this year?</div>
                                            </div>
                                            <div class="screen__item">
                                                <div class="screen__number">9</div>
                                                <div class="screen__text">How did the presentation to the client go?</div>
                                            </div>
                                            <div class="screen__item">
                                                <div class="screen__number">6</div>
                                                <div class="screen__text">What are the employee benefits going to look like in Q3 after we switch to the new provider?</div>
                                            </div>
                                            <div class="screen__item">
                                                <div class="screen__number">1</div>
                                                <div class="screen__text">Can we get an office pet?</div>
                                            </div>
                                        </div>
                                        <div class="screen__btn"><span class="screen__icon"><svg class="icon icon-review"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-review"></use></svg></span><span>Submit new question</span></div>
                                    </div>
                                </div>
                                <div class="screen__desktop">
                                    <div class="screen__value">15</div>
                                    <div class="screen__question">What does the holiday schedule <br>look like this year?</div>
                                    <div class="screen__info">Question from John Pickett</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="services__item js-tabs-item" id="polls-section">
                <div class="services__center center">
                    <div class="services__col">
                        <div class="services__polls">
                            <div class="services__title">Polls</div>
                            <div class="services__text">Have specific questions for your audience? Run one or more polls with many configurable options. You can choose to show individual polls at specific points of the event, or enable them all at once — the attendees will go through
                                them one by one. As responses flow in, watch the results update in real-time.</div>
                            <div class="services__wrap">
                                <div class="services__cell">
                                    <div class="services__info">Polls options:</div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_free">free</div>
                                        <div class="version__text">Text formatting
                                            <div class="version__description">Use formatted text or control the text size</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_free">free</div>
                                        <div class="version__text">CSV export
                                            <div class="version__description">Provides an option to export data to a CSV file.</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_light">light</div>
                                        <div class="version__text">Broadcast view
                                            <div class="version__description">Shows polls with results, one at a time. Useful when projected on the large presentation screen in front of the room. Each poll has a broadcast toggle. Can also be embedded in slides</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Add images
                                            <div class="version__description">Add images to a poll question or a poll answer to increase engagement</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Hide poll results
                                            <div class="version__description">Hide the results from the audience all the attendee's screens. Broadcast view will show the audience's results.</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Respond once
                                            <div class="version__description">Use this option if you want to prevent attendees from changing their answer</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Entry/Exit polls
                                            <div class="version__description">Polls shown before accessing or leaving the meeting</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="services__cell">
                                    <div class="services__info">Poll question types:</div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_free">free</div>
                                        <div class="version__text">Single choice
                                            <div class="version__description">Attendees are restricted to 1 answer to the poll</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_free">free</div>
                                        <div class="version__text">Yes/No
                                            <div class="version__description">Provides the presenter the option to ask yes/no questions in their poll</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_free">free</div>
                                        <div class="version__text">Rate
                                            <div class="version__description">A type of poll where respondent has to reply with 1 to 10 answer</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_light">light</div>
                                        <div class="version__text">Multiple choice
                                            <div class="version__description">Attendees can select multiple answers to a single poll</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Open/Free text
                                            <div class="version__description">Respondent can answer poll question with a free text answer, which generates a word cloud</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">NPS
                                            <div class="version__description">Net Promoter Score poll — for measuring employee or customer satisfaction</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Preference order
                                            <div class="version__description">Attendees are given a drag-and-drop list which allows them rank the answers</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="services__col">
                        <div class="screen screen_polls">
                            <div class="screen__wrap">
                                <div class="screen__phone">
                                    <div class="screen__title">Your preferred NYC office location:</div>
                                    <div class="screen__desc">
                                        <div class="screen__line"><span class="screen__numbering">1. </span><span class="screen__point">Flatiron</span></div>
                                        <div class="screen__line"><span class="screen__numbering">2. </span><span class="screen__point">Soho</span></div>
                                        <div class="screen__line"><span class="screen__numbering">3. </span><span class="screen__point">Midtown</span></div>
                                        <div class="screen__line"><span class="screen__numbering">4. </span><span class="screen__point">UWS</span></div>
                                    </div>
                                </div>
                                <div class="screen__desktop">
                                    <div class="screen__result">Results</div>
                                    <div class="screen__title">Your preferred NYC <br>office location:</div>
                                    <div class="screen__desc">
                                        <div class="screen__line"><span class="screen__point">Flatiron</span><span class="screen__numbering">23%</span></div>
                                        <div class="screen__line"><span class="screen__point">Soho</span><span class="screen__numbering">41%</span></div>
                                        <div class="screen__line"><span class="screen__point">Midtown</span><span class="screen__numbering">21%</span></div>
                                        <div class="screen__line"><span class="screen__point">UWS</span><span class="screen__numbering">15%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="services__item js-tabs-item" id="surveys-section">
                <div class="services__center center">
                    <div class="services__col">
                        <div class="services__surveys">
                            <div class="services__title">Surveys</div>
                            <div class="services__version version">
                                <div class="version__value version__value_full">full</div>
                                <div class="version__value version__value_enterprise">enterprise</div>
                            </div>
                            <div class="services__text">
                                <p>Combine multiple poll questions into a survey and run in before, during or after the meeting. Entry surveys are filled out prior to accessing the meeting. </p>
                                <p>Use them to segment the audience by demographics, affiliation, etc: for example, asking the audience where they are from, and then generating custom reports that break the other poll answers down by geography.</p>
                            </div>
                            <div class="services__info">Surveys options:</div>
                            <div class="services__wrap">
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_free">free</div>
                                        <div class="version__text">Add instructions
                                            <div class="version__description">Separate questions with custom text</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Text formatting
                                            <div class="version__description">Use formatted text or text of different sizes</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Optional questions
                                            <div class="version__description">Allow attendees to skip poll questions</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Entry survey/Exit survey
                                            <div class="version__description">Surveys before or after the meeting that your attendee is required to answer</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Custom thank you slide
                                            <div class="version__description">Create a custom slide thanking your attendees for their participation</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="services__col">
                        <div class="services__inner">
                            <div class="services__preview"><img class="services__phone" src="/wp-content/themes/meetingpulse/img/phone.png"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="services__item js-tabs-item" id="polls-section">
                <div class="services__center center">
                    <div class="services__col">
                        <div class="services__quizzes">
                            <div class="services__title">Quizzes</div>
                            <div class="services__version version">
                                <div class="version__value version__value_full">full</div>
                                <div class="version__value version__value_enterprise">enterprise</div>
                            </div>
                            <div class="services__text">
                                <p>Test your audience’s knowledge and make it fun. Quizzes are poll questions with one or several options marked as a correct answer. By default, attendees are shown whether their answer is correct. </p>
                                <p>The “Hide results” setting will also hide the correct/incorrect quiz result from the attendee. The polls broadcast view will highlight the correct answer.</p>
                            </div>
                            <div class="services__info">Quizzes options:</div>
                            <div class="services__wrap">
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Make any poll a quiz
                                            <div class="version__description">Designate a correct answer to a single answer poll to track who answered correctly</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Multiple correct options
                                            <div class="version__description">Use a multiple answer poll as a quiz when there is more than one correct answer. Each option is separate, so attendees get points for any correct answer they select</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Hide the audience's results
                                            <div class="version__description">The “Hide results” setting will also hide the correct/incorrect quiz result from the attendee. The polls broadcast view will highlight the correct answer</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Respond once
                                            <div class="version__description">Prevent the attendees from submitting more than 1 answers</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="services__col">
                        <div class="services__inner">
                            <div class="services__preview"><img class="services__phone" src="/wp-content/themes/meetingpulse/img/phone-1.png"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="services__item js-tabs-item" id="pulse-section">
                <div class="services__center center">
                    <div class="services__col">
                        <div class="services__pulse">
                            <div class="services__title">Pulse</div>
                            <div class="services__version version">
                                <div class="version__value version__value_full">full</div>
                                <div class="version__value version__value_enterprise">enterprise</div>
                            </div>
                            <div class="services__text">
                                <p>Let your audience tell you how they feel in real time — see the “pulse” of the room. Attendees can react at any moment to what’s being said or presented.</p>
                            </div>
                            <div class="services__info">Pulse options:</div>
                            <div class="services__wrap">
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Sentiment Chart/timeline
                                            <div class="version__description">A chart that shows the audience's Pulse over the time of the meeting</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Audio Recording
                                            <div class="version__description">Record audio through your web browser so you can see what worked and what didn't</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Show/hide results
                                            <div class="version__description">The moderator has a bar graph of the audience's pulse that changes in real-time. You can show or hide it from your attendees</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Hide Instructions
                                            <div class="version__description">If your attendees are already familiar with pulse, you can hide the instruction pop-up so they don't have to dismiss it every time</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="services__col">
                        <div class="services__inner">
                            <div class="services__preview"><img class="services__phone" src="/wp-content/themes/meetingpulse/img/phone-4.png"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="services__item js-tabs-item" id="raffles-section">
                <div class="services__center center">
                    <div class="services__col">
                        <div class="services__raffles">
                            <div class="services__title">Raffles</div>
                            <div class="services__version version">
                                <div class="version__value version__value_full">full</div>
                                <div class="version__value version__value_enterprise">enterprise</div>
                            </div>
                            <div class="services__text">
                                <p>Boost audience engagement by running a raffle – randomly selecting a member of your audience. Use them as ice breakers or a way to collect emails.</p>
                                <p>Use them to segment the audience by demographics, affiliation, etc: for example, asking the audience where they are from, and then generating custom reports that break the other poll answers down by geography.</p>
                            </div>
                            <div class="services__info">Raffle options:</div>
                            <div class="services__wrap">
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Random
                                            <div class="version__description">Select a random attendee</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Opt-in required
                                            <div class="version__description">Select a random attendee who has opted into the raffle</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Opt-in with email
                                            <div class="version__description">Select a random attendee who has opted in by submitted an email. Great way to collect email</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="services__col">
                        <div class="services__inner">
                            <div class="services__preview"><img class="services__phone" src="/wp-content/themes/meetingpulse/img/phone-3.png"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="services__item js-tabs-item">
                <div class="services__center center">
                    <div class="services__col">
                        <div class="services__reports">
                            <div class="services__title">Reports</div>
                            <div class="services__version version">
                                <div class="version__value version__value_full">full</div>
                                <div class="version__value version__value_enterprise">enterprise</div>
                            </div>
                            <div class="services__text">At the end of your meeting, automatically create reports with the details of what happened.</div>
                            <div class="services__info">Reports options:</div>
                            <div class="services__wrap">
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Anonymity preserved
                                            <div class="version__description">The reports include the "name" of each participant. Anonymous attendees are named "Attendee 34"</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Participant activity
                                            <div class="version__description">Track each participant's pulse, activities and questions</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Poll report
                                            <div class="version__description">Graphic display of overall poll results</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Questions report
                                            <div class="version__description">Displays all upvotes, questions and comments. Indicates which questions were answered and whether they were submitted early</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Summary Report
                                            <div class="version__description">Meeting duration, attendees and other basic information</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">PDF/Print view
                                            <div class="version__description">Displays the reports in an easy-to-print format. Includes any custom branding.</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">CSV Export
                                            <div class="version__description">Export all that data to do your own analysis</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_enterprise">entp</div>
                                        <div class="version__text">Custom Report Design
                                            <div class="version__description">Our report experts will create custom reports so you don't have to do your own analysis</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="services__col"></div>
                </div>
            </div>
            <div class="services__item js-tabs-item" id="security-section">
                <div class="services__center center">
                    <div class="services__col">
                        <div class="services__security">
                            <div class="services__title">Security and ID Manage&shy;ment</div>
                            <div class="services__text">Ask attendees their name and all their meeting activity will use the name they select</div>
                            <div class="services__info">Security options:</div>
                            <div class="services__wrap">
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Prompt for name
                                            <div class="version__description">Ask attendees their name and all their meeting activity will use the name they select</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Prompt for email
                                            <div class="version__description">Ask attendees for their email to track and identify their meeting activity</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Meeting password
                                            <div class="version__description">Secures the meeting without identifying attendees</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_light">light</div>
                                        <div class="version__text">SSO with ActiveDirectory or G Suite
                                            <div class="version__description">Integrate with your corporate identity system for user ID validation and security</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_light">light</div>
                                        <div class="version__text">Dedicated server
                                            <div class="version__description">Configure a hosted server dedicated to your organization in our cloud</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="services__col"></div>
                </div>
            </div>
            <div class="services__item js-tabs-item">
                <div class="services__center center">
                    <div class="services__col">
                        <div class="services__customization">
                            <div class="services__title">Customization</div>
                            <div class="services__info">Customization options:</div>
                            <div class="services__wrap">
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Branded themes for attendees
                                            <div class="version__description">Customize MeetingPulse with your color scheme and your logo</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Domain
                                            <div class="version__description">Use a memorable domain name for your attendees to access the meeting. This is great if you use posters or flyers for your events</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="services__col"></div>
                </div>
            </div>
            <div class="services__item js-tabs-item">
                <div class="services__center center">
                    <div class="services__col">
                        <div class="services__management">
                            <div class="services__title">Event management</div>
                            <div class="services__info">Event management options:</div>
                            <div class="services__wrap">
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Add more admins
                                            <div class="version__description">Customize MeetingPulse with your color scheme and your logo</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Share meeting templates
                                            <div class="version__description">Use a memorable domain name for your attendees to access the meeting. This is great if you use posters or flyers for your events</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__value version__value_full">full</div>
                                        <div class="version__text">Monitor meeting stats
                                            <div class="version__description">Use a memorable domain name for your attendees to access the meeting. This is great if you use posters or flyers for your events</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="services__cell">
                                    <div class="services__version version">
                                        <div class="version__text">Admin Roles
                                            <div class="version__description">Split up the work by inviting other admins to your meetings</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__text">Manager
                                            <div class="version__description">User can do everything a meeting owner can, except change meeting settings</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__text">Polls Manager
                                            <div class="version__description">User can create, edit and remove polls and surveys, as well as launch or stop them</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__text">Polls Moderator
                                            <div class="version__description">User can launch or stop existing polls and surveys, as well as toggle their visibility in Broadcast view. Poll results are not shown</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__text">Questions Moderator
                                            <div class="version__description">User can manage meeting questions by approving or rejcting them, editing them, or marking them as answered</div>
                                        </div>
                                    </div>
                                    <div class="services__version version">
                                        <div class="version__text">Speaker View
                                            <div class="version__description">User has access to the Speaker app mode that shows the moderated questions from the audience</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="services__col"></div>
                </div>
            </div>
            <div class="services__center center">
                <div class="services__links links botp"><a class="links__blue" href="/#pricing">Learn More</a></div>
            </div>
        </div>
    </div>

    <!-- company-->
    <div class="company company_features">
        <div class="company__video"><video autoplay muted loop><source src="/wp-content/themes/meetingpulse/video/iStock-514252612.mp4" type="video/mp4"><source src="/wp-content/themes/meetingpulse/video/iStock-514252612.webm" type="video/webm"><source src="/wp-content/themes/meetingpulse/video/iStock-514252612.ogv" type="video/ogg"></video></div>
        <div class="company__bg"></div>
        <div class="company__container">
            <div class="company__center center">
                <div class="company__title">Trusted by leading global corporations and Fortune 100 companies</div>
                <div class="company__list">
                    <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-1.png" width="150px"></div>
                    <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-2.png" width="123px"></div>
                    <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-3.png" width="115px"></div>
                    <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-4.png" width="141px"></div>
                    <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-5.png" width="139px"></div>
                    <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-6.png" width="148px"></div>
                    <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-7.png" width="76px"></div>
                    <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-8.png" width="137px"></div>
                </div>
                <div class="company__bottom">
                    <div class="company__box">
                        <div class="company__numbers"><span>25,000</span> questions asked by participants</div>
                    </div>
                    <div class="company__box">
                        <div class="company__numbers"><span>3,500+</span> meetings & events</div>
                    </div>
                    <div class="company__box">
                        <div class="company__numbers"><span>400,000+</span> happy attendees</div>
                    </div>
                    <div class="company__box"><a class="company__btn btn btn_white" href="/#pricing">Learn More</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php get_footer(); ?>

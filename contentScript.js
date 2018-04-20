let body = document.getElementsByTagName('body')[0];

if (body.hasAttribute('data-splunk-version')) {

    chrome.runtime.sendMessage('lnhgcigfhoigkiileejnpjmegaojofmn', {
        action: 'tabWaitingAddon'
    });

    let obs = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node => {
                    if (node.classList) {
                        if (node.classList.contains('dashboard')) {
                            obs.disconnect();
                            setTimeout(() => {
                                chrome.runtime.sendMessage('lnhgcigfhoigkiileejnpjmegaojofmn', {
                                    action: 'tabReady'
                                });
                            }, 1000);
                        }
                    }
                });
            }
        });
    });

    obs.observe(document, {childList: true, subtree:true});
}
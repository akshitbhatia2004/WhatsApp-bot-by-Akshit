FROM quay.io/lyfe00011/md:beta
RUN git clone https://github.com/akshitbhatia2004/WhatsApp-bot-by-Akshit /root/LyFE/
WORKDIR /root/LyFE/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]

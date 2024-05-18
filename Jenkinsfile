pipeline {
    agent any

    stages {
        stage("Notify Start") { // Notifikasi ke Telegram bahwa build dimulai
            steps {
                script {
                    sendMessageToTelegram("1")
                }
            }
        }


        stage("Deploy NextJS Server") { // Notifikasi ke Telegram bahwa build selesai
            steps {
                script {
                    deployToSSH("SSH NextJS", "./shell-scripts/manage-nextjs-app.sh --projectpath /var/www/gamepay")
                }
            }
        }
    }

    post {
        failure { // Notifikasi ke Telegram jika build gagal
            script {
                sendMessageToTelegram("0")
            }
        }
        success { // Notifikasi ke Telegram jika build sukses
            script {
                sendMessageToTelegram("2")
            }
        }
    }
}


def deployToSSH(configName, execCommand) {
    script {
        // Menggunakan step plugin 'Publish Over SSH' untuk menjalankan perintah SSH
        sshPublisher(
            failOnError: true, // Gagal jika ada kesalahan
            publishers: [
                // Konfigurasi SSH Site
                sshPublisherDesc(
                    configName: configName, // Nama konfigurasi SSH yang sudah ada di Jenkins
                    transfers: [
                        sshTransfer(
                            execCommand: execCommand // Perintah SSH yang akan dijalankan)
                        )
                    ],
                    verbose: true // Tampilkan output perintah SSH
                )
            ]
        )
    }
}


def sendMessageToTelegram(messageCode) {
    // messageCode: 0 = Error, 1 = Start, 2 = Success
    def githubUrl = sh(script: 'git config --get remote.origin.url', returnStdout: true).trim() //Github url
    def commitHash = env.GIT_COMMIT //Git commit hash
    def lastCommitAuthor = sh(script: 'git log -1 --pretty=format:%an', returnStdout: true).trim() //Git commit author
    lastCommitAuthor = URLEncoder.encode(lastCommitAuthor, "UTF-8") // Encode spaces in lastCommitAuthor
    def branchName = scm.branches[0].name //Branch name
    def githubWithCommit = "${githubUrl}/commit/${commitHash}" //Github commit url
    def jobName = env.JOB_NAME // Job name
    def buildNumber = env.BUILD_NUMBER // Build number
    def jenkinsUrl = env.JENKINS_URL // Jenkins url
    def fullBlueOceanUrl = "${jenkinsUrl}blue/organizations/jenkins/${jobName}/detail/${jobName}/${buildNumber}/pipeline" // Blue Ocean url
    def group = "DEPLOYMENT"
    def senderBaseUrl = "https://notify.unitedpay.id/telemon"
    sh "curl -X GET \"${senderBaseUrl}?grup=${group}&msgCode=${messageCode}&jobName=${jobName}&buildNum=${buildNumber}&logsUrl=${fullBlueOceanUrl}&commitAuthor=${lastCommitAuthor}&commitUrl=${githubWithCommit}&branchName=${branchName}\""
}
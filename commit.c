#include <stdio.h>
#include <stdlib.h>
#include <unistd.h> // for sleep()
#include <string.h>

void runGitCommand(const char* command) {
    int status = system(command);
    if (status != 0) {
        printf("Error executing command: %s\n", command);
        exit(1);
    }
}

void createFile(const char* filename) {
    FILE* file = fopen(filename, "w");
    if (file == NULL) {
        perror("Error creating file");
        exit(1);
    }
    fprintf(file, "Initial content\n");
    fclose(file);
}

void appendToFile(const char* filename, int iteration) {
    FILE* file = fopen(filename, "a");
    if (file == NULL) {
        perror("Error opening file");
        exit(1);
    }
    fprintf(file, "Additional content %d\n", iteration);
    fclose(file);
}

void deleteFile(const char* filename) {
    if (remove(filename) != 0) {
        perror("Error deleting file");
        exit(1);
    }
}

int main() {
    const char* filename = "automated_file.txt";
    const int maxIterations = 10;

    for (int i = 1; i <= maxIterations; i++) {
        if (i == 1) {
            // Step 1: Create the file
            createFile(filename);
        } else {
            // Step 2: Append data to the file
            appendToFile(filename, i);
        }

        // Git commands: add, commit, and push
        runGitCommand("git add .");
        char commitMessage[50];
        sprintf(commitMessage, "git commit -m \"Automated commit %d\"", i);
        runGitCommand(commitMessage);
        runGitCommand("git push origin main"); // Replace 'main' with your branch name

        // Wait 10 minutes
        sleep(600);
    }

    // Step 3: Delete the file
    deleteFile(filename);

    // Final Git commands to push file deletion
    runGitCommand("git add .");
    runGitCommand("git commit -m \"Deleted automated file\"");
    runGitCommand("git push origin main");

    return 0;
}

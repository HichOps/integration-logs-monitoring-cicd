variable "credentials_file" {
  description = "Path to the GCP credentials JSON file"
  type        = string
}

variable "project_id" {
  description = "GCP Project ID"
  type        = string
}

variable "region" {
  description = "GCP Region"
  type        = string
  default     = "europe-west1"
}

variable "zone" {
  description = "GCP Zone"
  type        = string
  default     = "europe-west1-b"
}

variable "instance_name" {
  description = "Name of the VM instance"
  type        = string
}

variable "machine_type" {
  description = "Type of the VM machine"
  type        = string
  default     = "e2-medium"
}

variable "disk_image" {
  description = "Disk image for the VM"
  type        = string
  default     = "debian-cloud/debian-11"
}

variable "ssh_public_key" {
  description = "Path to the SSH public key"
  type        = string
}